import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { List } from "semantic-ui-react";

import { ClientService } from "../../api";
import { Size } from "../../constants/size";
import { Avatar } from "../Icon";
import LoadingAndError from "../LoadingAndError";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(ClientService.getClientById(id));
  }, [id]);

  const {
    currentClient: client,
    error,
    statusClientId: status,
  } = useSelector((state) => state.clients);

  return (
    <div className={style.WrapperClientDetails}>
      <LoadingAndError hasData={!!client} status={status} error={error} size={Size.BIG} text>
        <List className={style.Container}>
          <List.Content className={style.Info}>
            <Avatar
              avatar={client?.general.avatar}
              firstName={client?.general.firstName}
              lastName={client?.general.lastName}
              size="large"
            />
            <List.Content className={style.InfoClient}>
              <div className={style.Name}>
                {client?.general.firstName} {client?.general.lastName}
              </div>
              <div className={style.Job}>{client?.job.title}</div>
            </List.Content>
          </List.Content>
          <List.Item>
            <List.Icon className={style.Icon} name="users" />
            <List.Content>{client?.job.company}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon className={style.Icon} name="mail" />
            <List.Content>
              <a href={client?.contact.email}>{client?.contact.email}</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Icon className={style.Icon} name="phone" />
              {client?.contact.phone}
            </List.Content>
          </List.Item>
          <List.Content>
            <List.Icon className={style.Icon} name="map" />
            {client?.address.zipCode}
          </List.Content>
          <List.Item>
            <List.Icon className={style.Icon} name="marker" />
            <List.Content>{client?.address.city}</List.Content>
          </List.Item>
          <List.Content>
            <List.Icon className={style.Icon} name="map marker alternate" />
            {client?.address.country}
            {client?.address.street}
          </List.Content>
        </List>
      </LoadingAndError>
    </div>
  );
};

export default ClientDetails;
