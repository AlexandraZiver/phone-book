import React from "react";
import { Grid } from "semantic-ui-react";

import ClientList from "./components/ClientList";

function App() {
  return (
    <Grid columns={2}>
      <Grid.Column width={6}>
        <ClientList />
      </Grid.Column>
    </Grid>
  );
}

export default App;
