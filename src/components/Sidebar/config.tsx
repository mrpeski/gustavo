import { v4 } from "uuid";
import {
  Home,
  AndroidShare,
  DocumentIcon,
  NotebookIcon,
  HeartIcon,
  Calendar,
  UserGroupIcon,
  ChevronRight,
} from "../icons";

const withAntClass = (Component: any, props?: any) => {
  return (
    <span className={""}>
      <style>
        {`path {
          stroke-width: 1px !important;
        }`}
      </style>
      <Component />
    </span>
  );
};

export const navConfg = [
  {
    key: "1",
    icon: withAntClass(Home),
    label: "nav 1",
  },
  {
    key: "2",
    icon: withAntClass(UserGroupIcon),
    label: "nav 2",
  },
  {
    key: "3",
    icon: withAntClass(Calendar),
    label: "nav 3",
  },
  {
    key: v4(),
    icon: withAntClass(AndroidShare),
    label: "nav 3",
  },
  {
    key: v4(),
    icon: withAntClass(DocumentIcon),
    label: "nav 3",
  },
  {
    key: v4(),
    icon: withAntClass(NotebookIcon),
    label: "nav 3",
  },
  {
    key: v4(),
    icon: withAntClass(HeartIcon),
    label: "nav 3",
  },
  {
    key: v4(),
    icon: withAntClass(ChevronRight),
    label: "Go Back",
  },
];
