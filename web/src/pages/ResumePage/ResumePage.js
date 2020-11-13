import { Link, routes } from '@redwoodjs/router'
import ResumeLayout from 'src/layouts/ResumeLayout'
import {
  CgArrowLongLeft,
  CgFolder,
  CgFileDocument,
  CgChevronRight,
} from 'react-icons/cg'

const FolderItem = (props) => {
  return (
    <li className="col-span-1 row-span-1 flex justify-center">
      <Link to={props.to} className="flex flex-col items-center">
        <span className="text-4xl mb-1">{props.icon}</span>
        <span>{props.title}</span>
      </Link>
    </li>
  )
}

const ResumePage = () => {
  return (
    <ResumeLayout>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        <FolderItem to={routes.lifeGraph()} icon={<CgFileDocument/>} title="Digital Resume" />
      </ul>
    </ResumeLayout>
  )
}

export default ResumePage
