export interface SchedulingCardProps {
  data: {
    id: number;
    customer: string;
    service: string;
    observation: string | null;
    start: string;
    end: string;
    status: true;
  };
}
