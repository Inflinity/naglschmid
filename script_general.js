(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
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
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
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
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
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
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init()","downloadEnabled":false,"shadow":false,"scrollBarVisible":"rollOver","mobileMipmappingEnabled":false,"scrollBarMargin":2,"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","scrollBarWidth":10,"gap":10,"contentOpaque":false,"paddingTop":0,"id":"rootPlayer","width":"100%","children":["this.MainViewer"],"paddingBottom":0,"paddingLeft":0,"mouseWheelEnabled":true,"horizontalAlign":"left","backgroundColorDirection":"vertical","paddingRight":0,"borderRadius":0,"backgroundColorRatios":[0],"verticalAlign":"top","scrollBarColor":"#000000","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"layout":"absolute","scripts":{"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlays":TDV.Tour.Script.getOverlays,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playAudioList":TDV.Tour.Script.playAudioList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initQuiz":TDV.Tour.Script.initQuiz,"showWindow":TDV.Tour.Script.showWindow,"setMapLocation":TDV.Tour.Script.setMapLocation,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPixels":TDV.Tour.Script.getPixels,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setLocale":TDV.Tour.Script.setLocale,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"registerKey":TDV.Tour.Script.registerKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"translate":TDV.Tour.Script.translate,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData},"height":"100%","scrollBarOpacity":0.5,"overflow":"hidden","backgroundOpacity":1,"backgroundPreloadEnabled":true,"definitions": [{"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingTop":4,"subtitlesShadow":false,"playbackBarProgressBorderSize":0,"subtitlesTextDecoration":"none","playbackBarBorderRadius":0,"displayTooltipInSurfaceSelection":true,"subtitlesBorderSize":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","subtitlesEnabled":true,"width":"100%","toolTipShadowSpread":0,"data":{"name":"Main Viewer"},"id":"MainViewer","subtitlesPaddingBottom":5,"paddingLeft":0,"playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333333","subtitlesBackgroundOpacity":0.2,"paddingRight":0,"toolTipShadowOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingRight":6,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"toolTipBorderRadius":3,"toolTipShadowBlurRadius":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"height":"100%","vrPointerSelectionColor":"#FF6600","toolTipTextShadowBlurRadius":3,"playbackBarHeadBorderRadius":0,"playbackBarHeadOpacity":1,"playbackBarProgressOpacity":1,"toolTipTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"subtitlesHorizontalAlign":"center","class":"ViewerArea","progressBackgroundColorRatios":[0],"propagateClick":false,"progressRight":0,"transitionMode":"blending","subtitlesFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressOpacity":1,"playbackBarBottom":5,"minHeight":50,"progressBarBackgroundColorDirection":"vertical","minWidth":100,"toolTipShadowHorizontalLength":0,"subtitlesOpacity":1,"borderSize":0,"toolTipFontSize":"1.11vmin","progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","vrPointerSelectionTime":2000,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundColor":"#000000","subtitlesFontWeight":"normal","paddingTop":0,"progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"subtitlesVerticalAlign":"bottom","subtitlesTop":0,"paddingBottom":0,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowBlurRadius":0,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"borderRadius":0,"toolTipPaddingLeft":6,"progressBarOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingRight":5,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"toolTipShadowVerticalLength":0,"progressBottom":0,"firstTransitionDuration":0,"progressHeight":10,"doubleClickAction":"toggle_fullscreen","progressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"toolTipFontWeight":"normal","surfaceReticleOpacity":0.6,"transitionDuration":500,"progressBarBorderSize":0,"progressBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingTop":5,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","toolTipFontStyle":"normal","subtitlesPaddingLeft":5,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarHeadWidth":6,"progressBorderRadius":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderSize":0,"toolTipPaddingBottom":4,"playbackBarHeadShadowColor":"#000000","toolTipOpacity":1,"playbackBarOpacity":1,"progressLeft":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"toolTipDisplayTime":600,"shadow":false,"playbackBarHeadShadowOpacity":0.7,"translationTransitionDuration":1000,"toolTipBorderSize":1},{"hfovMin":"150%","label":trans('panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5.label'),"vfov":130.75,"class":"Panorama","hfovMax":130,"hfov":360,"data":{"label":"H0000 Panorama"},"thumbnailUrl":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"colCount":24,"width":12288,"rowCount":4,"url":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_t.jpg"}],"pitch":0,"id":"panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5"},{"initialSequence":"this.sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5_camera","media":"this.panorama_CCDFBF0C_C0DE_D4BB_41E4_12367DDFA7D5","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"mouseControlMode":"drag_rotation","zoomEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"restartMovementOnUserInteraction":false,"id":"sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}]}],"class":"Player","vrPolyfillScale":0.75,"propagateClick":false,"minHeight":20,"minWidth":20,"mediaActivationMode":"window","borderSize":0,"data":{"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player937","locales":{"de":"locale/de.txt"},"defaultLocale":"de"}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.11.js.map
//Generated with v2021.2.11, Wed Oct 27 2021