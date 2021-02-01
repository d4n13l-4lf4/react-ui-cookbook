import {Fragment} from "react";
import {Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";

const ListSections = () => (
  <Fragment>
      <Typography variant={"h5"}>First Section</Typography>
      <List>
          <ListItem>
              <ListItemText primary={"First"} />
          </ListItem>
          <ListItem>
              <ListItemText primary={"Second"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
              <ListItemText primary={"Third"} />
          </ListItem>
          <ListItem>
              <ListItemText primary={"Fourth"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
              <ListItemText primary={"Fifth"} />
          </ListItem>
          <ListItem>
              <ListItemText primary={"Sixth"} />
          </ListItem>
      </List>
  </Fragment>
);

export default ListSections;
