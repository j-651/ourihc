import { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

import styles from './trivia.module.sass';

import Greeting from '../components/Greeting';
import EmailLookup from '../components/EmailLookup';
import Chat from '../components/Chat';
import CurrentlyWatching from '../components/CurrentlyWatching';
import Bracket from '../components/Bracket';

let publishKey;
let subscribeKey;

if (process.env.NODE_ENV === 'development') {
  publishKey = process.env.REACT_APP_DEV_PUBLISH_KEY;
  subscribeKey = process.env.REACT_APP_DEV_SUBSCRIBE_KEY;
} else {
  publishKey = process.env.REACT_APP_PROD_PUBLISH_KEY;
  subscribeKey = process.env.REACT_APP_PROD_SUBSCRIBE_KEY;
}

const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
  publishKey,
  subscribeKey,
  uuid,
});

function Trivia() {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const sendDataToParent = (data) => {
    setUser(data);
  };

  useEffect(() => {
    document.title = 'Trivia Tournament';
  }, []);

  return (
    <div className="page--maroon">
      {!authenticated || !user || !user.nickname ? (
        <div className={[styles.authWall, 'fadeIn'].join(' ')}>
          <h2 className="heading">Authentication</h2>
          <p>
            Before you can participate in this interactive trivia tournament, we
            need to confirm who you are.
          </p>

          <EmailLookup sendDataToParent={sendDataToParent} />

          {user &&
            user.email &&
            user.email !== null &&
            user.email.length >= '@saintanselms.org'.length + 3 &&
            user.nickname &&
            user.nickname.length >= 2 && (
              <button
                type="button"
                className="button primary round has-icon"
                onClick={() => setAuthenticated(true)}
              >
                Dive In <span>&rarr;</span>
              </button>
            )}
        </div>
      ) : (
        <div className={[styles.columns, 'fadeIn'].join(' ')}>
          <aside className={styles.sidebar}>
            <div className={(styles.section, styles.greeting)}>
              <h2 className="heading">Trivia Tournament</h2>
              <p className={styles.description}>
                <Greeting case="sentence" />, {user.nickname}! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Obcaecati maxime qui
                accusantium?
              </p>
            </div>

            <div className={(styles.section, styles.greeting)}>
              <h3 className="heading">Chat</h3>
              <p className={styles.description}>
                Keep an eye here for information from the IHC!
              </p>

              <hr />

              <PubNubProvider client={pubnub}>
                <Chat />
              </PubNubProvider>
            </div>

            <div className={(styles.section, styles.greeting)}>
              <h3 className="heading">Currently Watching</h3>
              <p className={styles.description}>
                <PubNubProvider client={pubnub}>
                  <CurrentlyWatching />
                </PubNubProvider>
              </p>
            </div>
          </aside>

          <Bracket />
        </div>
      )}
    </div>
  );
}

export default Trivia;
