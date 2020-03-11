export interface Menu extends SubMenu {
  children?: SubMenu[];
}

export interface SubMenu {
  icon?: string;
  title: string;
  abrevia?: string;
  router: string;
  expanse?: boolean;
}
