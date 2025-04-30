import dayjs from "dayjs";
import { SchedulerProjectData } from "@/types/global";

export const setProjectsInRows = (projects: SchedulerProjectData[]): SchedulerProjectData[][] => {
  const rows: SchedulerProjectData[][] = [];
  for (const project of projects) {
    let isAdded = false;
    if (rows.length) {
      for (const row of rows) {
        let isColliding = false;
        for (let i = 0; i < row.length; i++) {
          const projectStart = dayjs(project.startDate).startOf("day");
          const projectEnd = dayjs(project.endDate).startOf("day");
          const rowStart = dayjs(row[i].startDate).startOf("day");
          const rowEnd = dayjs(row[i].endDate).startOf("day");
          if (
            projectStart.isBetween(rowStart, rowEnd, null, "[]") ||
            projectEnd.isBetween(rowStart, rowEnd, null, "[]") ||
            (projectStart.isBefore(rowStart, "minute") && projectEnd.isAfter(rowEnd, "minute")) ||
            (projectStart.isAfter(rowStart, "minute") && projectEnd.isBefore(rowEnd, "minute"))
          ) {
            isColliding = true;
            break;
          }
        }
        if (!isColliding) {
          row.push(project);
          isAdded = true;
          break;
        }
      }
    }
    if (!isAdded) {
      rows.push([project]);
    }
  }
  return rows;
};
