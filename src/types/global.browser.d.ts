interface Window {
    userInfo: any;
    groupInfo: any;
    monaco: any;
    Vue: any;
    webConsole: any;
    _requestHash: any;
    isQueryModified: Boolean;
    isModified: Boolean;
    spider: {
        trackAction: Function;
        getSearchParams: Function;
    };
    THREE: any;
    Element: any;
    isNaN: Function;
    getAnswerEndTime: number;
    getAnswerStartTime: number;
    topicVersionTipsMessage: any;
    dataSetVersionTipsMessage: any;
    clipboardData: any;
    AMap: any;
    initAMap: any;
    Loca: any;
}

declare var window: Window;

interface PopStateEvent {
    target: Window;
}

type GraphType = 'table' | 'bar' | 'line' | 'area' | 'pie' | 'scatter' | 'pathTracker' | 'treemap';

//Importing untyped JS modules Hotpot
declare module '@vdian/hotpot/*';
