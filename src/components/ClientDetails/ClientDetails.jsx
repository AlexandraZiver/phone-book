import React from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { Image, List } from "semantic-ui-react";

import db from "../../data/clients.json";
import Backdrop from "../Backdrop";
=======
import { useParams, Link } from "react-router-dom";
import { Image, List } from "semantic-ui-react";

import db from "../../data/clients.json";
import NotFound from "../NotFound/NotFound";
>>>>>>> 3233376 (feature/clients-details)
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
  const { id } = useParams();
<<<<<<< HEAD
  const userInfo = db[id];

  if (!userInfo) {
    return (
      <Backdrop>
        <p>Sorry, the client is not found</p>
      </Backdrop>
    );
  }

  return (
    <div className={style.WrapperClientDetails}>
      <List className={style.Container}>
        <List.Content className={style.Info}>
          <Image className={style.Image} src={userInfo.general.avatar} circular />
          <List.Content className={style.InfoClient}>
            <div className={style.Name}>
              {userInfo.general.firstName} {userInfo.general.lastName}
            </div>
            <div className={style.Job}>{userInfo.job.title}</div>
          </List.Content>
        </List.Content>
=======
  let userInfo = db[id];

  if (!userInfo) {
    return <NotFound />;
  }
  return (
    <div className={style.WrapperClientDetails}>
      <List className={style.Info}>
        <List.Content className={style.InfoClient}>
          <Image className={style.Image} src={userInfo.general.avatar} circular />
          <span className={style.Name}>
            {userInfo.general.firstName} {userInfo.general.lastName}{" "}
          </span>
          <span className={style.Job}>{userInfo.job.title}</span>
        </List.Content>

>>>>>>> 3233376 (feature/clients-details)
        <List.Item>
          <List.Icon className={style.Icon} name="users" />
          <List.Content>{userInfo.job.company}</List.Content>
        </List.Item>
<<<<<<< HEAD
        <List.Item>
          <List.Icon className={style.Icon} name="mail" />
          <List.Content>
            <a href={userInfo.contact.email}>{userInfo.contact.email}</a>
          </List.Content>
        </List.Item>
=======

        <List.Item>
          <List.Icon className={style.Icon} name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>

        <List.Item>
          <List.Icon className={style.Icon} name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">{userInfo.contact.email}</a>
          </List.Content>
        </List.Item>

>>>>>>> 3233376 (feature/clients-details)
        <List.Item>
          <List.Content>
            <List.Icon className={style.Icon} name="phone" />
            {userInfo.contact.phone}
          </List.Content>
        </List.Item>
<<<<<<< HEAD
=======

>>>>>>> 3233376 (feature/clients-details)
        <List.Content>
          <List.Icon className={style.Icon} name="map" />
          {userInfo.address.zipCode}
        </List.Content>
<<<<<<< HEAD
        <List.Item>
          <List.Icon className={style.Icon} name="marker" />
          <List.Content>{userInfo.address.city}</List.Content>
        </List.Item>
        <List.Content>
          <List.Icon className={style.Icon} name="map marker alternate" />
          {userInfo.address.country}
          {userInfo.address.street}
        </List.Content>
      </List>
=======

        <List.Content>
          <List.Icon className={style.Icon} name="map marker alternate" />
          {userInfo.address.country}
          {userInfo.address.city}
          {userInfo.address.street}
        </List.Content>
      </List>
      <Link to="/">
        <button className={style.BtnReturn}>HOME</button>
      </Link>
>>>>>>> 3233376 (feature/clients-details)
    </div>
  );
};

export default ClientDetails;
