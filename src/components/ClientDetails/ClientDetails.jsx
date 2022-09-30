import React from "react";
import { useParams } from "react-router-dom";
import { Image, List } from "semantic-ui-react";

import db from "../../data/clients.json";
import NotFound from "../Error/NotFound";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
  const { id } = useParams();
  let userInfo = db[id];
  if (!userInfo) {
    return <NotFound />;
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

        <List.Item>
          <List.Icon className={style.Icon} name="users" />
          <List.Content>{userInfo.job.company}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon className={style.Icon} name="mail" />
          <List.Content>
            <a href={userInfo.contact.email}>{userInfo.contact.email}</a>
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
    </div>
  );
};

export default ClientDetails;
