export default interface INavigation {
  key: string;
  label: string;
  link: string;
  children: INavigation[];
}
