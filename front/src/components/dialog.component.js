import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";

const options = ["client injoignable", "place non reconnue"];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, getMarker, ...other } = props;

  return (
    <Dialog
      onClose={onClose}
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogContent dividers>
        <List component="div" role="group">
          {options.map((opt, ind) => (
            <ListItem
              key={ind}
              button
              divider
              aria-haspopup="true"
              aria-controls="ringtone-menu"
              aria-label="phone ringtone"
              onClick={() => {
                getMarker("error", opt);
                onClose();
              }}
            >
              <ListItemText primary={opt} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default function ConfirmationDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <button onClick={handleClickListItem}>probléme</button>
      <ConfirmationDialogRaw
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
        getMarker={props.getMarker}
      />
    </div>
  );
}
