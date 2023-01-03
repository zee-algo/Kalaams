import React, { useEffect } from 'react';
// import type { AppProps } from 'next/app';
import { ToastContainer, Slide } from 'react-toastify';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { GridProvider } from '@faceless-ui/css-grid';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
// import App from 'next/app';
import Router, { useRouter } from 'next/router';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';
import { GridContainerWidthProvider } from '../components/layout/GridContainer';
// import Header from '../components/layout/Header';
import useStyles from '../css/app';
import zIndex from '../css/zIndex';
import breakpoints from '../css/breakpoints';
import { base } from '../css/base';
import { Type as MegaMenuType } from '../globals/MegaMenu';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';
import CloseModalOnRoute from '../components/utilities/CloseModalOnRoute';
import transitions from '../css/transitions';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.css';
import Sidebar from '../components/layout/Sidebar';

type AppProps = {
  pageProps: unknown;
  Component: React.FC<{ footer: FooterType; socialMedia: SocialMediaType }>;
} & {
  megaMenu: MegaMenuType;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const transitionClass = 'page-transitions';

const MyApp = (appProps: AppProps): React.ReactElement => {
  const classes = useStyles();
  const { Component, pageProps, megaMenu, footer, socialMedia } = appProps;
  const router = useRouter();

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }

    Router.events.on('routeChangeStart', () => {
      document.documentElement.style['scroll-behavior'] = 'initial';
    });

    Router.events.on('routeChangeComplete', () => {
      // perfectly timed scroll-to-top between route changes when no components are visible
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });

        setTimeout(() => {
          document.documentElement.style['scroll-behavior'] = 'smooth';
        }, 2000);
      }, transitions.page);
    });
  }, []);
  // <Component {...pageProps} />
  return (
    <ScrollInfoProvider>
      <WindowInfoProvider breakpoints={breakpoints}>
        <ModalProvider
          zIndex={zIndex.modal}
          classPrefix="payload"
          transTime={400}
        >
          <GridContainerWidthProvider>
            <GridProvider
              rowGap={{
                s: base(2),
                m: base(2),
                l: base(2),
                xl: base(2),
              }}
              colGap={{
                s: base(2),
                m: base(2),
                l: base(2),
                xl: base(2),
              }}
              cols={{
                s: 8,
                m: 8,
                l: 12,
                xl: 12,
              }}
            >
              <div
                className={classes.app}
                style={{ height: '100vh' }}
              >
                {/* <Header megaMenu={megaMenu} socialMedia={socialMedia} /> */}
                <div className={classes.container}>
                  <div className={classes.sideBar}>
                    <Sidebar />
                  </div>
                  <div className={classes.content}>
                    <TransitionGroup
                      component={null}
                      exit
                      appear
                    >
                      <SwitchTransition type="out-in">
                        <CSSTransition
                          key={`${router.pathname}${JSON.stringify(
                            router.query,
                          )}`}
                          timeout={transitions.page}
                          classNames={transitionClass}
                        >
                          <div className={transitionClass}>
                            <Component
                              {...pageProps}
                              footer={footer}
                              socialMedia={socialMedia}
                            />
                          </div>
                        </CSSTransition>
                      </SwitchTransition>
                    </TransitionGroup>
                  </div>
                </div>
              </div>
            </GridProvider>
          </GridContainerWidthProvider>
          <CloseModalOnRoute />
          <ModalContainer />
        </ModalProvider>
      </WindowInfoProvider>
      <ToastContainer
        position="bottom-center"
        transition={Slide}
      />
    </ScrollInfoProvider>
  );
};

export default MyApp;
