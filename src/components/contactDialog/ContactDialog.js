import React, { useState } from 'react';
import "./ContactDialog.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {VscChromeClose} from "react-icons/vsc";
import {BiMailSend} from "react-icons/bi";


  const useStyles = makeStyles(theme => ({
    textField: {
        '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiOutlinedInput-root': {
            margin: "10px",
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
    },
}));

export default function ContactDialog(props) {

    const [dialogOpen, setDialogOpen] = useState(true);

    const [etunimi, setEtunimi] = useState("");
    const [etunimiErrorMsg, setEtunimiErrorMsg] = useState("");

    const [sukunimi, setSukunimi] = useState("");
    const [sukunimiErrorMsg, setSukunimiErrorMsg] = useState("");

    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");

    const [viesti, setViesti] = useState("");
    const [viestiErrorMsg, setViestiErrorMsg] = useState("");

    const classes = useStyles();

    const handleClose = () => {
        setDialogOpen(false);
        props.open(false);
      };

      const handleSend = () => {
        let error = false;
        if (etunimi.length === 0 || etunimi === "") {
            setEtunimiErrorMsg("First Name");
            error = true;
        }
        else{
           setEtunimiErrorMsg("");
        }

        if (sukunimi.length === 0 || sukunimi === "") {
            setSukunimiErrorMsg("Last Name");
            error = true;
        }
        else{
            setSukunimiErrorMsg("");
         }

         if (email.length === 0 || email === "") {
            setEmailErrorMsg("Email");
            error = true;
        }
        else{
            setEmailErrorMsg("");
         }

         if (viesti.length === 0 || viesti === "") {
          setViestiErrorMsg("Message");
          error = true;
      }
      else{
          setViestiErrorMsg("");
       }

        if (error == false){
            //do something
        }

      }
    
    return (
        <Dialog open={dialogOpen} onClose={handleClose}  aria-labelledby="form-dialog-title">
         <div id="border_outline">
        <h1 id="dialog_title">Leave a message</h1>
        <DialogContent>
        <div id="border_form">
        <form noValidate autoComplete="off">
        
        <TextField className={classes.textField} variant="outlined" error={etunimiErrorMsg != ""} helperText={etunimiErrorMsg} required id="Etunimi" label="First Name" value={etunimi}
        onChange={(e) => {
         setEtunimi(e.target.value);
         (e.target.value.length === 0) ? setEtunimiErrorMsg("First Name") : setEtunimiErrorMsg("")
         }} />

        <br />

         <TextField className={classes.textField} variant="outlined" error={sukunimiErrorMsg != ""} helperText={sukunimiErrorMsg} required id="Sukunimi" label="Last Name" value={sukunimi}
        onChange={(e) => {
         setSukunimi(e.target.value);
         (e.target.value.length === 0) ? setSukunimiErrorMsg("Last Name") : setSukunimiErrorMsg("")
         }} />

        <br />

        <TextField className={classes.textField} variant="outlined" error={emailErrorMsg != ""} helperText={emailErrorMsg} required id="Email" label="Email" value={email}
        onChange={(e) => {
         setEmail(e.target.value);
         (e.target.value.length === 0) ? setEmailErrorMsg("Email") : setEmailErrorMsg("")
         }} />

         <br />

         <TextField  className={classes.textField} variant="outlined" required id="Viesti" label="Message" multiline minRows={10}
          error={viestiErrorMsg != ""} helperText={viestiErrorMsg} 
          onChange={(e) => {setViesti(e.target.value);
         (e.target.value.length === 0) ? setViestiErrorMsg("Message box empty") : setViestiErrorMsg("")
         }}
          />

        </form>
        <div id="textDiv_contact">
        <a id="text_contact">This form has no functionality atm!
        </a>
        </div>
        </div>
        </DialogContent>

                <DialogActions>
                <div id="buttonDiv">
                <button id="button_close" onClick={() => handleClose()}><VscChromeClose id="icon_close"/>Close</button>
                <button id ="button_send" onClick={() => handleSend()}><BiMailSend id="icon_send"/>Send</button>
                </div>
                </DialogActions>
                </div>
            </Dialog>
    );
}