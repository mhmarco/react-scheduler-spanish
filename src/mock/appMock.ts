import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { ReservationType, SchedulerCategory, SchedulerData, SchedulerProjectData } from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

const secondsInWorkDay = 28800;

export const mockedOnRangeChange = (range: ParsedDatesRange, data: SchedulerData) => {
  console.log("Mocked on range change has been triggered. New range: ", range, data);
};

const getRandomWords = (amount?: number) =>
  amount ? faker.random.words(amount) : faker.random.word();

const getRandomDates = (year: number) => {
  const startDate = faker.date.between(new Date(year, 0, 1), new Date(year + 1, 0, 1));
  const durationDays = Math.floor(Math.random() * 4) + 2;
  const endDate = dayjs(startDate).add(durationDays, "days").toDate();
  return { startDate, endDate };
};

export const generateProjects = (
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5,
  title: string
): SchedulerProjectData[] => {
  const startYear = dayjs().subtract(Math.floor(years / 2), "years").get("year");
  const endYear = dayjs().add(Math.floor(years / 2), "years").get("year");
  const data = [];
  const bgColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 200)},${Math.ceil(Math.random() * 200)})`;

  for (let yearIndex = startYear; yearIndex <= endYear; yearIndex++) {
    const projectsPerYear = Math.ceil(Math.random() * maxProjectsPerYear);
    for (let projectIndex = 0; projectIndex < projectsPerYear; projectIndex++) {
      const { startDate, endDate } = getRandomDates(yearIndex);
      const eventRoll = Math.random();
      const isTransfer = eventRoll < 0.4;
      const isDayTour = eventRoll >= 0.4 && eventRoll < 0.6;
      const driverNames = ["John Smith", "Maria Garcia", "James Wilson", "Ana Martinez", "Robert Brown"];
      const airlines = ["AA", "UA", "DL", "BA", "LH", "AF", "IB", "KL"];

      let finalEndDate: Date;
      if (isTransfer) {
        finalEndDate = startDate;
      } else if (isDayTour) {
        finalEndDate = dayjs(startDate).add(Math.floor(Math.random() * 6) + 4, "hours").toDate();
      } else {
        finalEndDate = endDate;
      }

      data.push({
        reservationId: faker.datatype.uuid(),
        segmentId: faker.datatype.uuid(),
        startDate,
        endDate: finalEndDate,
        occupancy: Math.ceil(Math.random() * secondsInWorkDay),
        title,
        subtitle: faker.name.fullName(),
        description: getRandomWords(amountOfDscWords),
        bgColor,
        eventType: isTransfer ? ReservationType.Transfer : ReservationType.Tour,
        bookingNumber: faker.random.alphaNumeric(6).toUpperCase(),
        groupName: !isTransfer && Math.random() > 0.5 ? `${faker.company.name()} Group` : undefined,
        driver: driverNames[Math.floor(Math.random() * driverNames.length)],
        flightNumber: `${airlines[Math.floor(Math.random() * airlines.length)]}${Math.floor(1000 + Math.random() * 9000)}`,
        serviceNotes: Math.random() > 0.7 ? "VIP client - priority service required" : undefined,
        reservationNotes: Math.random() > 0.7 ? "Guest requested early pickup" : undefined
      });
    }
  }
  return data;
};

/** Test categories: ordered by maxPassengers in the UI */
export const mockCategories: SchedulerCategory[] = [
  { id: "hiace", name: "Hiace", minPassengers: 1, maxPassengers: 14 },
  { id: "rosa", name: "Rosa", minPassengers: 15, maxPassengers: 28 },
  { id: "bus", name: "Bus", minPassengers: 29, maxPassengers: 45 }
];

export const createMockData = (
  amountOfPeople: number,
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5
): SchedulerData => {
  const schedulerData: SchedulerData = [];

  // Vehicle definitions per category
  const vehiclesByCat = [
    { categoryId: "hiace", icon: "🚐", type: "Hiace", capacity: 14 },
    { categoryId: "rosa", icon: "🚌", type: "Rosa", capacity: 28 },
    { categoryId: "bus", icon: "🚎", type: "Bus", capacity: 45 }
  ];

  const subcontractCompanies = [
    { icon: "🏢", company: "Alpha Transport", capacity: 12 },
    { icon: "🏭", company: "Beta Logistics", capacity: 8 },
    { icon: "🏗️", company: "Gamma Fleet", capacity: 15 }
  ];

  const subcontractCount = Math.max(Math.ceil(amountOfPeople * 0.2), 1);
  const ownCount = amountOfPeople - subcontractCount;

  for (let i = 0; i < ownCount; i++) {
    const vehicle = vehiclesByCat[i % vehiclesByCat.length];
    const num = Math.floor(i / vehiclesByCat.length) + 1;
    const title = `${vehicle.type} #${num}`;
    const data: SchedulerProjectData[] = generateProjects(
      years, maxProjectsPerYear, amountOfDscWords, title
    ).map((project) => {
      const passengers = Math.ceil(Math.random() * 12);
      return { ...project, totalPassengers: passengers, subtitle: `${passengers} passengers` };
    });

    schedulerData.push({
      id: faker.datatype.uuid(),
      label: { icon: vehicle.icon, title, subtitle: `${vehicle.capacity} seats` },
      capacity: vehicle.capacity,
      categoryId: vehicle.categoryId,
      data
    });
  }

  for (let i = 0; i < subcontractCount; i++) {
    const sub = subcontractCompanies[i % subcontractCompanies.length];
    const title = `${sub.company} #${Math.floor(i / subcontractCompanies.length) + 1}`;
    const data: SchedulerProjectData[] = generateProjects(
      years, maxProjectsPerYear, amountOfDscWords, title
    ).map((project) => {
      const passengers = Math.ceil(Math.random() * 12);
      return { ...project, totalPassengers: passengers, subtitle: `${passengers} passengers` };
    });

    schedulerData.push({
      id: faker.datatype.uuid(),
      label: { icon: sub.icon, title, subtitle: sub.company },
      capacity: sub.capacity,
      isSubcontract: true,
      data
    });
  }

  return schedulerData;
};
