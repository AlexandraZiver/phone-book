import React from "react";
import { useParams, Link } from "react-router-dom";
import { Image, List } from "semantic-ui-react";

import db from "../../data/clients.json";
import NotFound from "../NotFound/NotFound";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
  const { id } = useParams();
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

        <List.Item>
          <List.Icon className={style.Icon} name="users" />
          <List.Content>{userInfo.job.company}</List.Content>
        </List.Item>

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

        <List.Item>
          <List.Content>
            <List.Icon className={style.Icon} name="phone" />
            {userInfo.contact.phone}
          </List.Content>
        </List.Item>

        <List.Content>
          <List.Icon className={style.Icon} name="map" />
          {userInfo.address.zipCode}
        </List.Content>

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
    </div>
  );
};

export default ClientDetails;
