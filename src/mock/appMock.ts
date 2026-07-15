import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { ReservationType, SchedulerCategory, SchedulerData, SchedulerProjectData, TileReadiness } from "@/types/global";
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
  { id: "p5", name: "5 Pax", minPassengers: 1, maxPassengers: 5 },
  { id: "p8", name: "8 Pax", minPassengers: 6, maxPassengers: 8 },
  { id: "p17", name: "17 Pax", minPassengers: 9, maxPassengers: 17 },
  { id: "p21", name: "21 Pax", minPassengers: 18, maxPassengers: 21 },
  { id: "p22", name: "22 Pax", minPassengers: 22, maxPassengers: 45 }
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

// Deterministic demo dataset anchored to today — dev-only (NOT part of the library build). Every tile bucket
// (1-day tour, transfer, 2-day, multi-day, route-width) + subcontract confirmed/unconfirmed, so the redesigned
// Tile can be visually verified against every state in one viewport.
export const createDemoData = (): SchedulerData => {
  const d = (offsetDays: number, h = 0, m = 0) =>
    dayjs().startOf("day").add(offsetDays, "day").add(h, "hour").add(m, "minute").toDate();
  let seq = 0;
  const ev = (o: Partial<SchedulerProjectData> & { startDate: Date; endDate: Date }): SchedulerProjectData => ({
    reservationId: `demo-r-${seq}`,
    segmentId: `demo-s-${seq++}`,
    occupancy: secondsInWorkDay,
    title: "ARENAL",
    subtitle: "Cliente Demo",
    description: "Booking: DEMO01",
    eventType: ReservationType.Tour,
    bookingNumber: "DEMO01",
    ...o
  });

  const TF = ReservationType.Transfer;
  const cTf = "#3E6DB5"; // transfer blue
  const cTour = "#2C7A69"; // multi-day tour green
  const cOne = "#96473F"; // one-day tour maroon
  const cAlert = "#C6483D"; // alert red
  const cSubOk = "#3E8E5A"; // subcontract confirmed
  const cSubNo = "#7E8A85"; // subcontract unconfirmed
  const tf = (off: number, h: number, m: number, bk: string, readiness: TileReadiness, alert = false) =>
    ev({ startDate: d(off, h, m), endDate: d(off, h, m), title: "Transfer", subtitle: "AMADEUS", bgColor: alert ? cAlert : cTf, eventType: TF, bookingNumber: bk, readiness });

  return [
    {
      id: "u-h1",
      label: { title: "H-1", subtitle: "5 Pax | SJB16703" },
      capacity: 5,
      categoryId: "p5",
      data: [
        tf(-3, 6, 30, "CRF-06726", "confirmado"),
        tf(0, 9, 15, "CRF-09726", "notificado"),
        tf(3, 14, 0, "CRF-14726", "sin_avisar", true),
        tf(6, 7, 45, "CRF-07826", "confirmado"),
        tf(11, 6, 0, "CRF-06826", "confirmado"),
        tf(16, 13, 30, "CRF-13726", "confirmado"),
        tf(20, 7, 15, "CRF-07926", "confirmado")
      ]
    },
    {
      id: "u-foton",
      label: { title: "FOTON", subtitle: "8 Pax | SJB17785" },
      capacity: 8,
      categoryId: "p8",
      data: [
        ev({ startDate: d(3), endDate: d(4, 18), title: "ZZ-VOLCÁN", subtitle: "AMADEUS", bgColor: cTour, bookingNumber: "CRF-07726", readiness: "sin_avisar" }),
        ev({ startDate: d(12), endDate: d(13, 17), title: "IRAZÚ", subtitle: "AMADEUS", bgColor: cTour, bookingNumber: "CRF-16726", readiness: "confirmado" })
      ]
    },
    {
      id: "u-rosa-randal",
      label: { title: "ROSA / RANDAL", subtitle: "17 Pax | AB7212" },
      capacity: 17,
      categoryId: "p17",
      data: [
        ev({ startDate: d(-3), endDate: d(1, 18), title: "AVENTURA", subtitle: "AMADEUS", bgColor: cTour, driver: "Randall D.", bookingNumber: "CRF-09126", readiness: "confirmado" }),
        ev({ startDate: d(15), endDate: d(20, 18), title: "CARIBE SUR", subtitle: "AMADEUS", bgColor: cTour, driver: "Randall D.", bookingNumber: "CRF-20726", readiness: "confirmado" })
      ]
    },
    {
      id: "u-rosa-sun",
      label: { title: "ROSA SUN LONG", subtitle: "17 Pax | SJB20284" },
      capacity: 17,
      categoryId: "p17",
      data: [
        ev({ startDate: d(-2, 8), endDate: d(-2, 16), title: "IRAZÚ + CARTAGO", subtitle: "AMADEUS", bgColor: cOne, bookingNumber: "CRF-01726", readiness: "notificado" }),
        ev({ startDate: d(2), endDate: d(4, 18), title: "MONTEVERDE", subtitle: "AMADEUS", bgColor: cTour, driver: "Wilber V.", bookingNumber: "CRF-12726", readiness: "confirmado" }),
        ev({ startDate: d(9), endDate: d(11, 18), title: "TORTUGUERO", subtitle: "BUEN PASEO", bgColor: cOne, bookingNumber: "CRF-14726", readiness: "notificado" })
      ]
    },
    {
      id: "u-bus15",
      label: { title: "Bus 15", subtitle: "21 Pax | SJB19004" },
      capacity: 21,
      categoryId: "p21",
      data: []
    },
    {
      id: "u-bus22",
      label: { title: "Bus 22", subtitle: "22 Pax | SJB20515" },
      capacity: 22,
      categoryId: "p22",
      data: [
        ev({ startDate: d(2, 7), endDate: d(2, 16), title: "POÁS", subtitle: "AMADEUS", bgColor: cOne, bookingNumber: "CRF-07026", readiness: "confirmado" }),
        ev({ startDate: d(2, 9, 30), endDate: d(2, 18), title: "LA PAZ", subtitle: "AMADEUS", bgColor: cOne, bookingNumber: "CRF-09026", readiness: "confirmado" }),
        tf(16, 10, 0, "CRF-10726", "confirmado")
      ]
    },
    {
      id: "u-sub-tierraverde",
      label: { title: "Tierra Verde", subtitle: "Proveedor · 3 unid." },
      capacity: 40,
      isSubcontract: true,
      data: [
        ev({ startDate: d(-3), endDate: d(0, 18), title: "TIERRA VERDE", subtitle: "AMADEUS", bgColor: cSubOk, bookingNumber: "CRF-11726", subcontractConfirmed: true }),
        ev({ startDate: d(1), endDate: d(3, 18), title: "ARENAL", subtitle: "AMADEUS", bgColor: cSubOk, bookingNumber: "CRF-15726", subcontractConfirmed: true }),
        ev({ startDate: d(6), endDate: d(8, 18), title: "TIERRA VERDE", subtitle: "AMADEUS", bgColor: cSubOk, bookingNumber: "CRF-22726", subcontractConfirmed: true }),
        ev({ startDate: d(11), endDate: d(13, 18), title: "TIERRA VERDE", subtitle: "AMADEUS", bgColor: cSubOk, bookingNumber: "CRF-14926", subcontractConfirmed: true })
      ]
    },
    {
      id: "u-sub-ocasional",
      label: { title: "Ocasional", subtitle: "Ad-hoc · comparte…" },
      capacity: 30,
      isSubcontract: true,
      data: [
        ev({ startDate: d(-2), endDate: d(1, 18), title: "Transportes ABC", subtitle: "Keneth C.", bgColor: cSubNo, bookingNumber: "CRF-18726", subcontractConfirmed: false })
      ]
    }
  ];
};
