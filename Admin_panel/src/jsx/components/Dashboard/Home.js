import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
//import {NavLink} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Nav, Tab } from "react-bootstrap";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import BalanceCardSlider from "./Dashboard/BalanceCardSlider";
//import MorrisDonught from './Dashboard/MorrisDonught';
import OrderForm from "./Dashboard/OrderForm";
//import ServerStatusBar from './Dashboard/ServerStatusBar';
import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from "./SvgIcon";

//images
import coin from "./../../../images/coin.png";
import metaverse from "./../../../images/metaverse.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../store/actions/UserAction";
import { Swiper } from "swiper/react";

const DashboardComboChart = loadable(() =>
  pMinDelay(import("./Dashboard/DashboardComboChart"), 1000)
);
const AssetsChart = loadable(() =>
  pMinDelay(import("./Dashboard/AssetsChart"), 1000)
);

const ServerStatusBar = loadable(() =>
  pMinDelay(import("./Dashboard/ServerStatusBar"), 1000)
);

const pickerData = [
  { fillcolor: "var(--primary)", datatitle: "XTZ(40%)", price: "763" },
  { fillcolor: "#2A353A", datatitle: "BTC(20%)", price: "321" },
  { fillcolor: "#C0E192", datatitle: "BNB(10%)", price: "69" },
  { fillcolor: "#E085E4", datatitle: "ETH(10%)", price: "154" },
];

const marketBlog = [
  { icon: LtcIcon, classBg: "bg-success", Name: "LTC" },
  { icon: BtcIcon, classBg: "bg-warning", Name: "BTC" },
  { icon: XtzIcon, classBg: "bg-primary", Name: "XTZ" },
  { icon: EthIcon, classBg: "bg-pink", Name: "ETH" },
  { icon: XtzIcon, classBg: "bg-primary", Name: "XTZ" },
];

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const [data, setData] = useState([]);
  const { changeBackground } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  // Count active and trial subscriptions
  const { activeSubscriptions, trialSubscriptions } = users.reduce(
    (count, user) => {
      if (user.subscription && user.subscription.status) {
        if (user.subscription.status === "active") {
          count.activeSubscriptions++;
        } else if (user.subscription.status === "trial") {
          count.trialSubscriptions++;
        }
      }
      return count;
    },
    {
      activeSubscriptions: 0,
      trialSubscriptions: 0,
    }
  );

  console.log("Total Subscriptions: " + users.length);
  console.log("Active Subscriptions: " + activeSubscriptions);
  console.log("Trial Subscriptions: " + trialSubscriptions);
  const subs = [
    {
      heading: "Total Subsription",
      data: users.length,
    },
    {
      heading: "Active Subsription",
      data: activeSubscriptions,
    },
    {
      heading: "Trail Subsription",
      data: trialSubscriptions,
    },
  ];
  useEffect(() => {
    if (!loading && !error) {
      setData(users);
    }
  }, [loading, error, users]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card bubles">
                <div className="card-body">
                  <div className="buy-coin  bubles-down">
                    <div>
                      <h2>Total Users: {users.length}</h2>
                      {/* <h2>Buy & Sell 100+ Coins Instantly</h2> */}
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been.
                      </p>
                      <Link to={"/table-sorting"} className="btn btn-primary">
                        See Users
                      </Link>
                    </div>
                    <div className="coin-img">
                      <img src={coin} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex ">
              <div className="col-xl-12">
                <BalanceCardSlider data={subs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
