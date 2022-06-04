import announcementsJSON from "./annoucements.json";
import activitiesJSON from "./activities.json";

export interface Activity {
  id: string;
  link: string;
  title: string;
  date: string;
  class: string;
  classroom: string;
  description: string;
  teachers: string[];
  students: {
    name: string;
    avatar: string;
  }[];
  photos: string[];
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export function getActivities(
  page_number: number = 1,
  page_size: number = 5
): Promise<Activity[]> {
  return new Promise((res) => {
    const data = activitiesJSON.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );

    return res(data);
  });
}

export function getAnnouncements(
  page_number: number = 1,
  page_size: number = 5
): Promise<Announcement[]> {
  return new Promise((res) => {
    const data = announcementsJSON.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );

    return res(data);
  });
}
