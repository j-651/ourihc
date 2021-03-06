import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from '../components/ProgressiveImage';

import prioryPressLogo from '../assets/images/press.svg';

// Thanksgiving 2020 Priory Press Spreads
import spread1 from '../assets/images/press/thanksgiving-2020/1.jpg';
import spread1Overlay from '../assets/images/press/thanksgiving-2020/1-overlay.jpg';
import spread2 from '../assets/images/press/thanksgiving-2020/2.jpg';
import spread2Overlay from '../assets/images/press/thanksgiving-2020/2-overlay.jpg';
import spread3 from '../assets/images/press/thanksgiving-2020/3.jpg';
import spread3Overlay from '../assets/images/press/thanksgiving-2020/3-overlay.jpg';
import spread4 from '../assets/images/press/thanksgiving-2020/4.jpg';
import spread4Overlay from '../assets/images/press/thanksgiving-2020/4-overlay.jpg';
import spread5 from '../assets/images/press/thanksgiving-2020/5.jpg';
import spread5Overlay from '../assets/images/press/thanksgiving-2020/5-overlay.jpg';
import spread6 from '../assets/images/press/thanksgiving-2020/6.jpg';
import spread6Overlay from '../assets/images/press/thanksgiving-2020/6-overlay.jpg';
import spread7 from '../assets/images/press/thanksgiving-2020/7.jpg';
import spread7Overlay from '../assets/images/press/thanksgiving-2020/7-overlay.jpg';
import spread8 from '../assets/images/press/thanksgiving-2020/8.jpg';
import spread8Overlay from '../assets/images/press/thanksgiving-2020/8-overlay.jpg';
import spread9 from '../assets/images/press/thanksgiving-2020/9.jpg';
import spread9Overlay from '../assets/images/press/thanksgiving-2020/9-overlay.jpg';
import spread10 from '../assets/images/press/thanksgiving-2020/10.jpg';
import spread10Overlay from '../assets/images/press/thanksgiving-2020/10-overlay.jpg';
import spread11 from '../assets/images/press/thanksgiving-2020/11.jpg';
import spread11Overlay from '../assets/images/press/thanksgiving-2020/11-overlay.jpg';
import spread12 from '../assets/images/press/thanksgiving-2020/12.jpg';
import spread12Overlay from '../assets/images/press/thanksgiving-2020/12-overlay.jpg';
import spread13 from '../assets/images/press/thanksgiving-2020/13.jpg';
import spread13Overlay from '../assets/images/press/thanksgiving-2020/13-overlay.jpg';
import spread14 from '../assets/images/press/thanksgiving-2020/14.jpg';
import spread14Overlay from '../assets/images/press/thanksgiving-2020/14-overlay.jpg';
import spread15 from '../assets/images/press/thanksgiving-2020/15.jpg';
import spread15Overlay from '../assets/images/press/thanksgiving-2020/15-overlay.jpg';
import spread16 from '../assets/images/press/thanksgiving-2020/16.jpg';
import spread16Overlay from '../assets/images/press/thanksgiving-2020/16-overlay.jpg';
import spread17 from '../assets/images/press/thanksgiving-2020/17.jpg';
import spread17Overlay from '../assets/images/press/thanksgiving-2020/17-overlay.jpg';

const Press = () => {
  useEffect(() => {
    document.title = 'The Priory Press: Thanksgiving 2020';
  }, []);

  const utcnow = Date.now();
  const releasingAt = 1605877200000;
  const released = utcnow >= releasingAt;

  return (
    <div className="page--purple">
      <section className="content--block">
        <img src={prioryPressLogo} alt="The Priory Press" />
        <h1 style={{ display: 'none', visibility: 'hidden' }}>
          The Priory Press
        </h1>
        {released ? (
          <>
            <p>
              Our newest edition, <em>Thanksgiving 2020</em>, was released on
              November 20, 2020. It is available below.
            </p>
            <br />
            <a
              href="//drive.google.com/file/d/1plAd0SYV6J-IfF5CkaOlCXNwTrsfDB7J/preview"
              className="button primary round has-icon"
            >
              Open PDF <span>&rarr;</span>
            </a>
            <Link
              to="/press/fall-2020"
              className="button primary link has-icon"
              style={{ marginLeft: '1.25em' }}
            >
              View Fall 2020 Edition <span>&rarr;</span>
            </Link>
          </>
        ) : (
          <>
            <p>
              Our newest edition, <em>Thanksgiving 2020</em>, will be released
              here on November 20, 2020. In the meantime, our previous{' '}
              <em>Fall 2020</em> edition is available below.
            </p>

            <br />

            <Link
              to="/press/fall-2020"
              className="button primary round has-icon"
            >
              View Fall 2020 Edition <span>&rarr;</span>
            </Link>
          </>
        )}
      </section>

      {released && (
        <section className="content--block full bordered">
          <div style={{ maxWidth: '50%', float: 'right' }}>
            <ProgressiveImage
              src={spread1}
              lowResSrc={spread1Overlay}
              alt="Spread 1 - Front Cover"
            />
          </div>
          <ProgressiveImage
            src={spread2}
            lowResSrc={spread2Overlay}
            alt="Spread 2"
          />
          <ProgressiveImage
            src={spread3}
            lowResSrc={spread3Overlay}
            alt="Spread 3"
          />
          <ProgressiveImage
            src={spread4}
            lowResSrc={spread4Overlay}
            alt="Spread 4"
          />
          <ProgressiveImage
            src={spread5}
            lowResSrc={spread5Overlay}
            alt="Spread 5"
          />
          <ProgressiveImage
            src={spread6}
            lowResSrc={spread6Overlay}
            alt="Spread 6"
          />
          <ProgressiveImage
            src={spread7}
            lowResSrc={spread7Overlay}
            alt="Spread 7"
          />
          <ProgressiveImage
            src={spread8}
            lowResSrc={spread8Overlay}
            alt="Spread 8"
          />
          <ProgressiveImage
            src={spread9}
            lowResSrc={spread9Overlay}
            alt="Spread 9"
          />
          <ProgressiveImage
            src={spread10}
            lowResSrc={spread10Overlay}
            alt="Spread 10"
          />
          <ProgressiveImage
            src={spread11}
            lowResSrc={spread11Overlay}
            alt="Spread 11"
          />
          <ProgressiveImage
            src={spread12}
            lowResSrc={spread12Overlay}
            alt="Spread 12"
          />
          <ProgressiveImage
            src={spread13}
            lowResSrc={spread13Overlay}
            alt="Spread 13"
          />
          <ProgressiveImage
            src={spread14}
            lowResSrc={spread14Overlay}
            alt="Spread 14"
          />
          <ProgressiveImage
            src={spread15}
            lowResSrc={spread15Overlay}
            alt="Spread 15"
          />
          <ProgressiveImage
            src={spread16}
            lowResSrc={spread16Overlay}
            alt="Spread 16"
          />
          <div style={{ maxWidth: '50%' }}>
            <ProgressiveImage
              src={spread17}
              lowResSrc={spread17Overlay}
              alt="Spread 17 - Back Cover"
            />
          </div>
        </section>
      )}

      <section className="content--block bordered">
        <h3 className="heading">Want to contribute?</h3>
        <p>
          We're always looking for students, faculty, and alumni interested in
          contributing to <b>The Priory Press</b>!
        </p>
        <br />
        <Link to="/press/info" className="button primary hollow round has-icon">
          Learn more <span>&rarr;</span>
        </Link>
      </section>
    </div>
  );
};
export default Press;
