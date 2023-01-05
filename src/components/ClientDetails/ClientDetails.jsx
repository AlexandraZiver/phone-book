import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "semantic-ui-react";

import { ClientService } from "../../services";
import { Backdrop } from "../Backdrop";
import { Avatar } from "../Icon";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
  const { id } = useParams();

  const [client, setClient] = useState();

  useEffect(() => {
    const fetchClientById = async (id) => {
      const client = await ClientService.getById(id);
      setClient(client);
    };

    fetchClientById(id);
  }, [id]);

  if (!client) {
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
          <Avatar
            avatar={client.general.avatar}
            firstName={client.general.firstName}
            lastName={client.general.lastName}
            size="large"
          />
          <List.Content className={style.InfoClient}>
            <div className={style.Name}>
              {client.general.firstName} {client.general.lastName}
            </div>
            <div className={style.Job}>{client.job.title}</div>
          </List.Content>
        </List.Content>
        <List.Item>
          <List.Icon className={style.Icon} name="users" />
          <List.Content>{client.job.company}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon className={style.Icon} name="mail" />
          <List.Content>
            <a href={client.contact.email}>{client.contact.email}</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Icon className={style.Icon} name="phone" />
            {client.contact.phone}
          </List.Content>
        </List.Item>
        <List.Content>
          <List.Icon className={style.Icon} name="map" />
          {client.address.zipCode}
        </List.Content>
        <List.Item>
          <List.Icon className={style.Icon} name="marker" />
          <List.Content>{client.address.city}</List.Content>
        </List.Item>
        <List.Content>
          <List.Icon className={style.Icon} name="map marker alternate" />
          {client.address.country}
          {client.address.street}
        </List.Content>
      </List>
    </div>
  );
};

export default ClientDetails;
