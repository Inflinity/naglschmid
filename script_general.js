(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","scrollBarWidth":10,"borderSize":0,"toolTipFollowMouse":false,"defaultVRPointer":"laser","contentOpaque":false,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"desktopMipmappingEnabled":false,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"mediaActivationMode":"window","horizontalAlign":"left","paddingBottom":0,"scrollBarColor":"#000000","paddingRight":0,"scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizFinish":TDV.Tour.Script.quizFinish,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isPanorama":TDV.Tour.Script.isPanorama,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"setLocale":TDV.Tour.Script.setLocale,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"existsKey":TDV.Tour.Script.existsKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMainViewer":TDV.Tour.Script.getMainViewer},"children":["this.MainViewer"],"scrollBarVisible":"rollOver","menu":["this.TDVAuthor"],"scrollBarOpacity":0.5,"vrPolyfillScale":0.75,"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"propagateClick":false,"overflow":"hidden","backgroundColorRatios":[0],"backgroundColorDirection":"vertical","definitions": [{"surfaceReticleSelectionColor":"#FFFFFF","borderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"transitionDuration":500,"width":"100%","subtitlesFontColor":"#FFFFFF","subtitlesEnabled":true,"paddingLeft":0,"progressHeight":10,"translationTransitionDuration":1000,"id":"MainViewer","progressBorderSize":0,"toolTipPaddingLeft":6,"subtitlesPaddingBottom":5,"progressBarBorderRadius":0,"toolTipDisplayTime":600,"progressBarBorderSize":0,"progressRight":0,"progressOpacity":1,"playbackBarHeadShadowBlurRadius":3,"paddingRight":0,"playbackBarHeadBackgroundColorDirection":"vertical","vrPointerSelectionTime":2000,"surfaceReticleSelectionOpacity":1,"displayTooltipInSurfaceSelection":true,"playbackBarHeadWidth":6,"subtitlesShadow":false,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesPaddingTop":5,"progressBarBackgroundColorDirection":"vertical","height":"100%","playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"progressBarBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"playbackBarBackgroundColorDirection":"vertical","progressBorderRadius":0,"borderRadius":0,"toolTipBorderColor":"#767676","progressBarBackgroundColorRatios":[0],"progressLeft":0,"subtitlesOpacity":1,"toolTipFontFamily":"Arial","progressBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"minHeight":50,"subtitlesBottom":50,"class":"ViewerArea","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"minWidth":100,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"subtitlesFontWeight":"normal","toolTipHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"toolTipFollowMouse":false,"toolTipTextShadowBlurRadius":3,"progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipPaddingRight":6,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingRight":5,"paddingTop":0,"doubleClickAction":"toggle_fullscreen","displayTooltipInTouchScreens":true,"toolTipShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","subtitlesHorizontalAlign":"center","paddingBottom":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowVerticalLength":0,"toolTipShadowVerticalLength":0,"transitionMode":"blending","playbackBarBorderColor":"#FFFFFF","playbackBarHeadOpacity":1,"playbackBarBorderRadius":0,"toolTipShadowColor":"#333138","toolTipShadowOpacity":1,"subtitlesTextShadowBlurRadius":0,"subtitlesVerticalAlign":"bottom","toolTipShadowSpread":0,"subtitlesTop":0,"toolTipTextShadowOpacity":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"toolTipFontStyle":"normal","toolTipBackgroundColor":"#F6F6F6","surfaceReticleOpacity":0.6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBorderColor":"#000000","subtitlesTextDecoration":"none","playbackBarOpacity":1,"progressBarOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderRadius":0,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","progressBackgroundOpacity":1,"progressBottom":0,"toolTipBorderRadius":3,"playbackBarHeadShadowHorizontalLength":0,"subtitlesFontSize":"3vmin","toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"playbackBarProgressOpacity":1,"toolTipBorderSize":1,"subtitlesFontFamily":"Arial","toolTipPaddingBottom":4,"subtitlesBorderSize":0,"toolTipShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","shadow":false,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0},{"viewerArea":"this.MainViewer","displayPlayOverlay":true,"clickAction":"play_pause","class":"VideoPlayer","displayPlaybackBar":true,"id":"MainViewerVideoPlayer"},{"initialPosition":{"yaw":-124.03,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera","media":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hfov":360,"label":trans('panorama_0FF52F62_05A8_E0FA_4173_830D890CA291.label'),"vfov":57.93,"class":"Panorama","overlays":["this.overlay_463816DD_48E7_8065_41A9_488F856B6638","this.overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562","this.overlay_46716DDE_48EB_8067_41A5_783C803F99E8","this.overlay_0083FFAD_0ECB_7A83_4191_387F22B41131","this.overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26","this.overlay_22834582_2D89_63D4_41C5_E89333D47AA5","this.overlay_4DD216F5_434E_CE64_41CA_30E7451A251A","this.overlay_43424BB5_4E06_F950_41D0_ADD8EAF6A34B","this.overlay_40A0A523_4E0A_4977_41AD_6C06BCF6EC57","this.overlay_408D4E77_4E06_3BD0_41CF_DCD6FD4EBDD1","this.overlay_40F2E991_4E06_5953_41C9_7A3F7D91CB2A","this.overlay_415AECEF_4E07_D8CF_41A0_C1F7039DE347","this.overlay_AF118D90_A29E_3FC0_41DB_2157B13BCE61","this.overlay_AC8AB760_A29A_0B7F_418B_4195CF4E82E2"],"hfovMax":130,"frames":[{"front":{"levels":[{"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/0/{row}_{column}.jpg","height":8704,"colCount":17,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":17},{"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/1/{row}_{column}.jpg","height":4608,"colCount":9,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":9},{"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/2/{row}_{column}.jpg","height":2560,"colCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/3/{row}_{column}.jpg","height":1536,"colCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/4/{row}_{column}.jpg","height":1024,"colCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/5/{row}_{column}.jpg","height":512,"colCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/0/{row}_{column}.jpg","height":8704,"colCount":17,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":17},{"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/1/{row}_{column}.jpg","height":4608,"colCount":9,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":9},{"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/2/{row}_{column}.jpg","height":2560,"colCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/3/{row}_{column}.jpg","height":1536,"colCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/4/{row}_{column}.jpg","height":1024,"colCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/5/{row}_{column}.jpg","height":512,"colCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","back":{"levels":[{"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/0/{row}_{column}.jpg","height":8704,"colCount":17,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":17},{"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/1/{row}_{column}.jpg","height":4608,"colCount":9,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":9},{"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/2/{row}_{column}.jpg","height":2560,"colCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/3/{row}_{column}.jpg","height":1536,"colCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/4/{row}_{column}.jpg","height":1024,"colCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/5/{row}_{column}.jpg","height":512,"colCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/0/{row}_{column}.jpg","height":8704,"colCount":17,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":17},{"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/1/{row}_{column}.jpg","height":4608,"colCount":9,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":9},{"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/2/{row}_{column}.jpg","height":2560,"colCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/3/{row}_{column}.jpg","height":1536,"colCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/4/{row}_{column}.jpg","height":1024,"colCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/5/{row}_{column}.jpg","height":512,"colCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","partial":false,"data":{"label":"Naglschmid - Home"},"pitch":0,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291"},{"arrowKeysAction":"translate","zoomEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_0B744D6F_05AB_E0CA_4196_5E099984E24A","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_AD8EF3F6_A296_0B43_41C5_072059E77FB8, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_AD8EF3F6_A296_0B43_41C5_072059E77FB8, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AD8EF3F6_A296_0B43_41C5_072059E77FB8, 0)"}],"id":"playList_AD8EF3F6_A296_0B43_41C5_072059E77FB8"},{"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","loop":false,"height":500,"width":1000,"thumbnailUrl":"media/video_0B744D6F_05AB_E0CA_4196_5E099984E24A_t.jpg","chromaSmoothing":0.13,"id":"video_0B744D6F_05AB_E0CA_4196_5E099984E24A","label":trans('video_0B744D6F_05AB_E0CA_4196_5E099984E24A.label'),"class":"Video","chromaColor":"#324E70","chromaThreshold":0.14,"data":{"label":"glitch_logo"},"scaleMode":"fit_inside"},{"class":"PlayerMenuItem","label":trans('TDVAuthor.label'),"id":"TDVAuthor"},{"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","loop":true,"useHandCursor":true,"vfov":21.84,"pitch":6.62,"chromaSmoothing":0.13,"id":"overlay_463816DD_48E7_8065_41A9_488F856B6638","image":"this.res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6","distance":50,"yaw":-128.79,"autoplay":true,"videoVisibleOnStop":false,"class":"VideoPanoramaOverlay","chromaColor":"#324E70","enabledInCardboard":true,"chromaThreshold":0.14,"data":{"hasAudio":false,"label":"Video"},"cues":[],"hfov":43.05},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"],"id":"overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562","useHandCursor":true,"items":[{"image":"this.res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0","distance":50,"yaw":-91.76,"pitch":-2.53,"vfov":12.48,"class":"HotspotPanoramaOverlayImage","data":{"label":"apogee_web"},"verticalAlign":"middle","horizontalAlign":"center","hfov":7.05,"scaleMode":"fit_inside"}],"data":{"label":"apogee_web"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_46710DDE_48EB_8067_41C3_F4D7787A71C0"],"id":"overlay_46716DDE_48EB_8067_41A5_783C803F99E8","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_46718DDE_48EB_8067_41D2_357EAE0571CA"],"data":{"label":"naglschmid"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"],"id":"overlay_0083FFAD_0ECB_7A83_4191_387F22B41131","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D"],"data":{"label":"Welcome"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"],"id":"overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26","useHandCursor":true,"items":[{"image":"this.res_0117A759_0F08_7246_419D_869732A0D349","distance":50,"yaw":-115.36,"pitch":8.13,"vfov":7.95,"class":"HotspotPanoramaOverlayImage","data":{"label":"211010---Flinti_Logo_Original"},"verticalAlign":"middle","horizontalAlign":"center","hfov":6.85,"scaleMode":"fit_inside"}],"data":{"label":"211010---Flinti_Logo_Original"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"],"id":"overlay_22834582_2D89_63D4_41C5_E89333D47AA5","useHandCursor":true,"items":[{"image":"this.res_222FDB4F_2D99_276C_41B1_E6B94B609133","distance":50,"yaw":-108.71,"pitch":-4.27,"vfov":17.31,"class":"HotspotPanoramaOverlayImage","data":{"label":"ARTIFICiAL_issue_1_2"},"verticalAlign":"middle","horizontalAlign":"center","hfov":16.85,"scaleMode":"fit_inside"}],"data":{"label":"ARTIFICiAL_issue_1_2"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_4D52F762_434E_CF9D_418F_C8C3F419A40F"],"id":"overlay_4DD216F5_434E_CE64_41CA_30E7451A251A","useHandCursor":true,"items":[{"image":"this.res_4DA12E5C_4343_41A4_419B_F4A16F1A4714","distance":50,"yaw":-72.06,"pitch":-2.77,"vfov":9.81,"class":"HotspotPanoramaOverlayImage","data":{"label":"pulsar_web"},"verticalAlign":"middle","horizontalAlign":"center","hfov":12.5,"scaleMode":"fit_inside"}],"data":{"label":"pulsar_web"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_43B86C22_4E06_FF71_418F_FA76AC19DA1B"],"id":"overlay_43424BB5_4E06_F950_41D0_ADD8EAF6A34B","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_4336DBB5_4E06_F950_41BB_140EF07F8A95"],"data":{"label":"Apogee"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_40A12523_4E0A_4977_41D1_4E261A4E1AC7"],"id":"overlay_40A0A523_4E0A_4977_41AD_6C06BCF6EC57","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_40A19523_4E0A_4977_41C4_0D6FB9C3ED49"],"data":{"label":"Dark White"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_408DBE77_4E06_3BD0_41CA_16CB213A35F5"],"id":"overlay_408D4E77_4E06_3BD0_41CF_DCD6FD4EBDD1","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_408D9E77_4E06_3BD0_419D_5C9EB69B7BC1"],"data":{"label":"Apogee"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_40A23A1E_4E06_5B50_41D0_5930DF50D362"],"id":"overlay_40F2E991_4E06_5953_41C9_7A3F7D91CB2A","useHandCursor":true,"items":[{"image":"this.res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459","distance":50,"yaw":-53.33,"pitch":-2.11,"vfov":10.77,"class":"HotspotPanoramaOverlayImage","data":{"label":"intermezzo_web"},"verticalAlign":"middle","horizontalAlign":"center","hfov":7.37,"scaleMode":"fit_inside"}],"data":{"label":"intermezzo_web"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_415AFCEF_4E07_D8CF_41BA_CAC19DA3069E"],"id":"overlay_415AECEF_4E07_D8CF_41A0_C1F7039DE347","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_415ADCEF_4E07_D8CF_41BA_1106F18BE490"],"data":{"label":"Apogee"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_AFC43E0D_A29E_3CC0_41E1_4A56082618DD"],"id":"overlay_AF118D90_A29E_3FC0_41DB_2157B13BCE61","useHandCursor":true,"items":[{"image":"this.res_ACF4948D_A296_0DC0_41E0_53C4F96A490D","distance":50,"yaw":-110.74,"pitch":12.17,"vfov":2.33,"class":"HotspotPanoramaOverlayImage","data":{"label":"twitter_sign"},"verticalAlign":"middle","horizontalAlign":"center","hfov":2.33,"scaleMode":"fit_inside"}],"data":{"label":"twitter_sign"},"maps":[]},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_AF6AB7EC_A29A_0B40_41D0_CC8364D8AB3A"],"id":"overlay_AC8AB760_A29A_0B7F_418B_4195CF4E82E2","useHandCursor":true,"items":[{"image":"this.res_ACF4A48D_A296_0DC0_41D4_F0034E7A8800","distance":50,"yaw":-112.83,"pitch":12.31,"vfov":2.51,"class":"HotspotPanoramaOverlayImage","data":{"label":"reddit_sign"},"verticalAlign":"middle","horizontalAlign":"center","hfov":2.16,"scaleMode":"fit_inside"}],"data":{"label":"reddit_sign"},"maps":[]},{"width":1000,"levels":["this.videolevel_AD97E32A_A296_04C0_41D7_4790A584799E"],"hasAudio":false,"height":500,"class":"VideoResource","id":"videores_0A87743E_05BB_E04A_4188_05F1E7B8063F"},{"levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6_0.jpg"}],"class":"ImageResource","id":"res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"},{"levels":[{"height":1012,"width":718,"class":"ImageResourceLevel","url":"media/res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0_0.png"}],"class":"ImageResource","id":"res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_46710DDE_48EB_8067_41C3_F4D7787A71C0"},{"vfov":2.4,"roll":-0.52,"horizontalAlign":"left","pitch":2.79,"id":"HotspotPanoramaOverlayTextImage_46718DDE_48EB_8067_41D2_357EAE0571CA","image":{"levels":["this.imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B"],"class":"ImageResource"},"distance":50,"yaw":-125.13,"class":"HotspotPanoramaOverlayImage","data":{"label":"naglschmid"},"verticalAlign":"top","hfov":10.1},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"},{"vfov":2.43,"roll":-1.63,"horizontalAlign":"right","pitch":10.92,"id":"HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D","image":{"levels":["this.imlevel_ACEDC76B_A296_0B40_41BA_50222B9131C1"],"class":"ImageResource"},"distance":50,"yaw":-127.06,"class":"HotspotPanoramaOverlayImage","data":{"label":"Welcome"},"verticalAlign":"top","hfov":14.12},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"},{"levels":[{"height":698,"width":698,"class":"ImageResourceLevel","url":"media/res_0117A759_0F08_7246_419D_869732A0D349_0.png"}],"class":"ImageResource","id":"res_0117A759_0F08_7246_419D_869732A0D349"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_AD027DBB_A296_1FC0_41E0_BEF381E98DB3.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"},{"levels":[{"height":1500,"width":1000,"class":"ImageResourceLevel","url":"media/res_222FDB4F_2D99_276C_41B1_E6B94B609133_0.png"}],"class":"ImageResource","id":"res_222FDB4F_2D99_276C_41B1_E6B94B609133"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_4D52F762_434E_CF9D_418F_C8C3F419A40F"},{"levels":[{"height":1000,"width":707,"class":"ImageResourceLevel","url":"media/res_4DA12E5C_4343_41A4_419B_F4A16F1A4714_0.png"}],"class":"ImageResource","id":"res_4DA12E5C_4343_41A4_419B_F4A16F1A4714"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_43B86C22_4E06_FF71_418F_FA76AC19DA1B"},{"horizontalAlign":"right","pitch":-9.48,"id":"HotspotPanoramaOverlayTextImage_4336DBB5_4E06_F950_41BB_140EF07F8A95","image":{"levels":["this.imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5"],"class":"ImageResource"},"distance":50,"yaw":-52.79,"class":"HotspotPanoramaOverlayImage","data":{"label":"Apogee"},"verticalAlign":"top","hfov":16.61,"vfov":3.59},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_40A12523_4E0A_4977_41D1_4E261A4E1AC7"},{"horizontalAlign":"right","pitch":-13.57,"id":"HotspotPanoramaOverlayTextImage_40A19523_4E0A_4977_41C4_0D6FB9C3ED49","image":{"levels":["this.imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E"],"class":"ImageResource"},"distance":50,"yaw":-109.34,"class":"HotspotPanoramaOverlayImage","data":{"label":"Dark White"},"verticalAlign":"top","hfov":16.61,"vfov":3.59},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_408DBE77_4E06_3BD0_41CA_16CB213A35F5"},{"horizontalAlign":"right","pitch":-9.92,"id":"HotspotPanoramaOverlayTextImage_408D9E77_4E06_3BD0_419D_5C9EB69B7BC1","image":{"levels":["this.imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D"],"class":"ImageResource"},"distance":50,"yaw":-92.83,"class":"HotspotPanoramaOverlayImage","data":{"label":"Apogee"},"verticalAlign":"top","hfov":16.61,"vfov":3.59},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_40A23A1E_4E06_5B50_41D0_5930DF50D362"},{"levels":[{"height":1062,"width":751,"class":"ImageResourceLevel","url":"media/res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459_0.png"}],"class":"ImageResource","id":"res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_415AFCEF_4E07_D8CF_41BA_CAC19DA3069E"},{"horizontalAlign":"right","pitch":-9.57,"id":"HotspotPanoramaOverlayTextImage_415ADCEF_4E07_D8CF_41BA_1106F18BE490","image":{"levels":["this.imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126"],"class":"ImageResource"},"distance":50,"yaw":-72.39,"class":"HotspotPanoramaOverlayImage","data":{"label":"Apogee"},"verticalAlign":"top","hfov":16.61,"vfov":3.59},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_ACFA6DC4_A29A_FF47_41BB_116C13447EC3.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_AFC43E0D_A29E_3CC0_41E1_4A56082618DD"},{"levels":[{"height":50,"width":50,"class":"ImageResourceLevel","url":"media/res_ACF4948D_A296_0DC0_41E0_53C4F96A490D_0.png"}],"class":"ImageResource","id":"res_ACF4948D_A296_0DC0_41E0_53C4F96A490D"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_ADF3AE00_A29A_1CC0_41E3_64215E0C67F2.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_AF6AB7EC_A29A_0B40_41D0_CC8364D8AB3A"},{"levels":[{"height":50,"width":50,"class":"ImageResourceLevel","url":"media/res_ACF4A48D_A296_0DC0_41D4_F0034E7A8800_0.png"}],"class":"ImageResource","id":"res_ACF4A48D_A296_0DC0_41D4_F0034E7A8800"},{"width":1000,"type":"video/mp4","url":trans('videolevel_AD97E32A_A296_04C0_41D7_4790A584799E.url'),"posterURL":trans('videolevel_AD97E32A_A296_04C0_41D7_4790A584799E.posterURL'),"height":500,"class":"VideoResourceLevel","bitrate":900,"framerate":24,"id":"videolevel_AD97E32A_A296_04C0_41D7_4790A584799E"},{"height":80.41,"width":339.26,"class":"ImageResourceLevel","url":trans('imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B.url'),"id":"imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B"},{"height":81.59,"width":475.59,"class":"ImageResourceLevel","url":trans('imlevel_ACEDC76B_A296_0B40_41BA_50222B9131C1.url'),"id":"imlevel_ACEDC76B_A296_0B40_41BA_50222B9131C1"},{"height":120.3,"width":560.53,"class":"ImageResourceLevel","url":trans('imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5.url'),"id":"imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5"},{"height":120.3,"width":560.53,"class":"ImageResourceLevel","url":trans('imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E.url'),"id":"imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E"},{"height":120.3,"width":560.53,"class":"ImageResourceLevel","url":trans('imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D.url'),"id":"imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D"},{"height":120.3,"width":560.53,"class":"ImageResourceLevel","url":trans('imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126.url'),"id":"imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126"}],"downloadEnabled":false,"layout":"absolute","borderRadius":0,"mobileMipmappingEnabled":false,"class":"Player","minHeight":20,"scrollBarMargin":2,"minWidth":20,"shadow":false,"backgroundPreloadEnabled":true,"toolTipHorizontalAlign":"center","data":{"name":"Player456","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"pitch":1,"speechOnTooltip":false,"rate":1},"defaultLocale":"de"},"backgroundOpacity":1};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.0.js.map
})();
//Generated with v2022.1.0, Sun May 8 2022