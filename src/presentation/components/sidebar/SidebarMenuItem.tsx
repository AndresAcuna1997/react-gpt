import { NavLink } from 'react-router-dom';
import MenuItem from '../../../interfaces/menuItem.interface';


interface Props {
  route: MenuItem;
}

export const SidebarMenuItem = ( { route }: Props ) => {
  return (
    <NavLink
      to={ route.to }
      key={ route.to }
      className={ ( { isActive } ) => isActive
        ? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
        : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors' }
    >
      <i className={ `${ route.icon } text-2xl mr-4 text-indigo-400` }></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibold">
          { route.title }
        </span>

        <span className="text-gray-400 text-sm">
          { route.description }
        </span>
      </div>
    </NavLink>
  );
};