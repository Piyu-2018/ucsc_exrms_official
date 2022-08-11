import React from 'react';
import React { useEffect, useState } from "react";
import { render } from "react-dom";


import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import GroupIcon from "@material-ui/icons/Group";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import RateReviewIcon from "@material-ui/icons/RateReview";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TableChartIcon from "@material-ui/icons/TableChart";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BarChartIcon from "@material-ui/icons/BarChart";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";

import { useHistory, useLocation } from "react-router-dom";

const RolesEnum = {
  Master: 0,
  Admin: 1,
  Manager: 2,
  Attendant: 3,
  Read: 4
};

const user = {
  Name: "Usuário X",
  Permission: RolesEnum.Master // to usando o enum para teste, mas o retorno vai ser o numero, ex: 0
};

const Permissions = {
  lowerRights: [
    RolesEnum.Master,
    RolesEnum.Admin,
    RolesEnum.Manager,
    RolesEnum.Attendant,
    RolesEnum.Read
  ],
  mediumRights: [
    RolesEnum.Master,
    RolesEnum.Admin,
    RolesEnum.Manager,
    RolesEnum.Attendant
  ],
  managerRights: [RolesEnum.Master, RolesEnum.Admin, RolesEnum.Manager],
  higherRights: [RolesEnum.Master, RolesEnum.Admin],
  masterRights: [RolesEnum.Master]
};

const Menu = [
  {
    path: "/",
    icon: <HomeIcon />,
    permission: Permissions.lowerRights,
    title: "Home"
  },
  {
    path: "/answer",
    icon: <QuestionAnswerIcon />,
    permission: Permissions.lowerRights,
    title: "Answers"
  },
  {
    path: "/campaigns",
    icon: <MarkunreadMailboxIcon />,
    permission: Permissions.managerRights,
    title: "Campaigns"
  },
  {
    path: "/people-list",
    icon: <GroupIcon />,
    permission: Permissions.lowerRights,
    title: "People List"
  },
  {
    path: "reports",
    icon: <TrendingUpIcon />,
    permission: Permissions.lowerRights,
    title: "Reports",
    childrens: [
      {
        path: "/reports/dimensions",
        icon: <TableChartIcon />,
        permission: Permissions.lowerRights,
        title: "Dimensions"
      },
      {
        path: "/reports/dimensions-tree",
        icon: <AccountTreeIcon />,
        permission: Permissions.mediumRights,
        title: "Dimensions Tree"
      },
      {
        path: "/reports/evolution",
        icon: <BarChartIcon />,
        permission: Permissions.higherRights,
        title: "Evolution"
      },
      {
        path: "/reports/priority-matrix",
        icon: <ViewModuleIcon />,
        permission: Permissions.managerRights,
        title: "Priority Matrix"
      },
      {
        path: "/reports/sentiment",
        icon: <SentimentSatisfiedAltIcon />,
        permission: Permissions.masterRights,
        title: "Sentiment Analisys"
      }
    ]
  },
  {
    path: "/import",
    icon: <ImportExportIcon />,
    permission: Permissions.higherRights,
    title: "Import People"
  },
  {
    path: "/form",
    icon: <RateReviewIcon />,
    permission: Permissions.managerRights,
    title: "Form"
  },
  {
    path: "/templates",
    icon: <WebAssetIcon />,
    permission: Permissions.managerRights,
    title: "Templates"
  },
  {
    path: "/admins",
    icon: <AccountBoxIcon />,
    permission: Permissions.higherRights,
    title: "Admins"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  active: {
    color: "#00AEEF"
  }
}));

const MenuList = ({ closeMenu }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { pathname } = location;

  useEffect(() => {
    !closeMenu && setOpen(false);
  }, [closeMenu]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRoute = path => history.push(path);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {Menu.map(
        item =>
          item.permission.some(id => user.Permission === id) &&
          (item.childrens ? (
            <>
              <ListItem key={item.path} button onClick={handleClick}>
                <ListItemIcon
                  className={pathname.includes(item.path) ? classes.active : ""}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={open}
                unmountOnExit
                timeout="auto"
                key={"colapse-" + item.path}
              >
                <List key={"list-" + item.path} component="div" disablePadding>
                  {item.childrens.map(
                    child =>
                      child.permission.some(id => user.Permission === id) && (
                        <ListItem
                          button
                          key={child.path}
                          className={classes.nested}
                          onClick={() => handleRoute(child.path)}
                        >
                          <ListItemIcon
                            className={
                              pathname === child.path ? classes.active : ""
                            }
                          >
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText primary={child.title} />
                        </ListItem>
                      )
                  )}
                </List>
                <Divider />
              </Collapse>
            </>
          ) : (
            <ListItem
              key={item.path}
              button
              onClick={() => handleRoute(item.path)}
            >
              <ListItemIcon
                className={pathname === item.path ? classes.active : ""}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))
      )}
    </List>
  );
};

export default MenuList;
