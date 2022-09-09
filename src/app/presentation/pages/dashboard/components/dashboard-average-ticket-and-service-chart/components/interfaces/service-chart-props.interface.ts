export interface ServiceProps {
  service: string;
  amount: number;
}

export interface ServiceChartProps {
  date: string;
  services: ServiceProps[];
}
