import React, { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { useDispatch } from "react-redux";
import { acceptFriendInvitation, rejectFriendInvitation } from "../../../store/actions/friendsActions";

const PendingInvitationsListItem = ({ id, username, mail }) => {
  const dispatch = useDispatch();
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    dispatch(acceptFriendInvitation({ id }));
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    dispatch(rejectFriendInvitation({ id }));
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
