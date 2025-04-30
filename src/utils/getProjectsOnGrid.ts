import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { SchedulerData, SchedulerProjectData } from "@/types/global";
import { setProjectsInRows } from "./setProjectsInRows";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];

export const projectsOnGrid = (data: SchedulerData): { projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[] } => {
  const initialProjectsData: ProjectsData = [[], []];

  const [projectsPerPerson, rowsPerPerson] = data.reduce((acc, curr) => {
    // --- Sort the person's projects BEFORE assigning to rows ---
    const sortedProjects = [...curr.data].sort((a, b) => { // Use spread [...] to avoid mutating original data if needed
      const startA = dayjs(a.startDate);
      const startB = dayjs(b.startDate);

      // Primary sort: Calendar day ascending
      const dayDiff = startA.startOf("day").diff(startB.startOf("day"), "day");

      if (dayDiff !== 0) {
        return dayDiff; // Return positive if A is later day, negative if B is later day
      } else {
        // Secondary sort: Start time descending (if on the same day)
        // diff returns ms (startB - startA). Positive means B is later -> B comes first.
        return startA.diff(startB);
      }
    });
    // ----------------------------------------------------------

    // Pass the pre-sorted list to setProjectsInRows
    const projectsInRows = setProjectsInRows(sortedProjects);

    acc[0].push(projectsInRows);
    acc[1].push(Math.max(projectsInRows.length, 1)); // Calculate rows needed based on collision layout
    return acc;
  }, initialProjectsData);

  return { projectsPerPerson, rowsPerPerson };
};