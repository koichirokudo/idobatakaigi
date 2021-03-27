import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const clasess = useStyles();

  // 第２引数を[]にすることで、無限ループを防ぐ
  useEffect(() => {
    console.log('useEffect');
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if(messages === null) return;

        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        console.log(newMessages);
        setMessages(newMessages);
      });
  }, []);

  return <div className={clasess.root}>MessageList</div>;
};

export default MessageList;
