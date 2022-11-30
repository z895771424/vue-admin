interface IMenuItem {
  title?: string;
  icon?: string;
  isClick?: boolean;
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[];
  routeName?:string
}
