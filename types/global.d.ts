type Perk = {
  id: string;
  name: string;
  type: 'survivor' | 'killer';
  owner?: string;
  initialScore: number;
  flavor: string;
  tags: string;
  description: string;
};
