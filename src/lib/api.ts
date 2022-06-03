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

export function getActivities(): Promise<Activity[]> {
  return new Promise((res) => {
    return res([]);
  });
}
