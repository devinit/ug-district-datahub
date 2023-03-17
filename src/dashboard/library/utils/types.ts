import { EChartOption } from 'echarts';
import { DIChart } from '../dicharts';
import { DIEChart } from '../echarts';

export interface DIChartConfig {
  className: string;
  d3?: DIChartD3Options;
  echarts?: DIChartEChartOptions;
  elements?: HTMLElement[];
}

export interface ChartWidgets {
  filters?: ChartFilter[];
}

export interface ChartFilter {
  className: string;
  options?: string[];
  multi?: boolean; // multi-select
  getOptions?: (manager: DIChart) => string[];
  onChange: (event: MouseEvent, manager: DIChart) => void;
}

export interface FilterData {
  name: string;
  value: string[];
}

export interface SeriesGroup {
  name: string;
}

export type ChartTheme = 'default' | 'sunflower' | 'marigold' | 'rose' | 'lavendar' | 'bluebell' | 'leaf' | 'rainbow';

export interface FilterOptions {
  labelPrefix?: string;
  labelSuffix?: string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface DIChartD3Options {
  onAdd?: (elements: NodeListOf<Element>) => void;
  widgets?: Partial<ChartWidgets>;
}

export interface DIChartEChartOptions {
  options?: EChartOption;
  csv?: {
    url: string;
    onFetch: (data: Array<{ [key: string]: any }>, manager: DIEChart) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  onInit?: (manager: DIEChart) => void;
  onAdd?: (elements: NodeListOf<Element>) => void;
  widgets?: Partial<ChartWidgets>;
}
