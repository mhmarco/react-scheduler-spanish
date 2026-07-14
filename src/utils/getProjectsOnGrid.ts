import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { SchedulerData, SchedulerProjectData } from "@/types/global";
import { setProjectsInRows } from "./setProjectsInRows";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];

// Per-person layout cache keyed on the person's `data` array reference. The sort + collision layout is O(n²)
// per person, and projectsOnGrid re-runs on ANY data-array identity change (e.g. a filter toggle). Consumers
// that keep a person's `data` reference stable when only OTHER people change (a shallow spread does) reuse the
// cached layout here, so untouched rows are not re-collided. WeakMap → entries GC with their data arrays.
const layoutCache = new WeakMap<SchedulerProjectData[], SchedulerProjectData[][]>();

const layoutForPerson = (personData: SchedulerProjectData[]): SchedulerProjectData[][] => {
  const cached = layoutCache.get(personData);
  if (cached) return cached;

  const sortedProjects = [...personData].sort((a, b) => {
    const startA = dayjs(a.startDate);
    const startB = dayjs(b.startDate);
    const dayDiff = startA.startOf("day").diff(startB.startOf("day"), "day");
    return dayDiff !== 0 ? dayDiff : startA.diff(startB);
  });

  const projectsInRows = setProjectsInRows(sortedProjects);
  layoutCache.set(personData, projectsInRows);
  return projectsInRows;
};

export const projectsOnGrid = (data: SchedulerData): { projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[] } => {
  const initialProjectsData: ProjectsData = [[], []];

  const [projectsPerPerson, rowsPerPerson] = data.reduce((acc, curr) => {
    const projectsInRows = layoutForPerson(curr.data);
    acc[0].push(projectsInRows);
    acc[1].push(Math.max(projectsInRows.length, 1)); // rows needed based on collision layout
    return acc;
  }, initialProjectsData);

  return { projectsPerPerson, rowsPerPerson };
};