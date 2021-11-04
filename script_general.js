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
    var d = {"start":"this.init()","gap":10,"mediaActivationMode":"window","children":["this.MainViewer"],"backgroundColorRatios":[0],"scrollBarOpacity":0.5,"scripts":{"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"registerKey":TDV.Tour.Script.registerKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clone":TDV.Tour.Script.clone,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"init":TDV.Tour.Script.init,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizFinish":TDV.Tour.Script.quizFinish,"setValue":TDV.Tour.Script.setValue,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showWindow":TDV.Tour.Script.showWindow,"getPixels":TDV.Tour.Script.getPixels,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"downloadFile":TDV.Tour.Script.downloadFile,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setLocale":TDV.Tour.Script.setLocale,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeech":TDV.Tour.Script.textToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initQuiz":TDV.Tour.Script.initQuiz,"translate":TDV.Tour.Script.translate,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex},"width":"100%","backgroundColorDirection":"vertical","paddingTop":0,"id":"rootPlayer","horizontalAlign":"left","toolTipHorizontalAlign":"center","paddingBottom":0,"mouseWheelEnabled":true,"borderRadius":0,"paddingRight":0,"paddingLeft":0,"backgroundOpacity":1,"scrollBarMargin":2,"contentOpaque":false,"vrPolyfillScale":0.75,"scrollBarWidth":10,"desktopMipmappingEnabled":false,"verticalAlign":"top","backgroundColor":["#333333"],"height":"100%","propagateClick":false,"layout":"absolute","defaultVRPointer":"laser","class":"Player","overflow":"hidden","definitions": [{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_E4A9FA1C_EB2A_CB8E_41C4_F54668712931, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_E4A9FA1C_EB2A_CB8E_41C4_F54668712931, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4A9FA1C_EB2A_CB8E_41C4_F54668712931, 0)"}],"id":"playList_E4A9FA1C_EB2A_CB8E_41C4_F54668712931"},{"video":{"levels":[{"framerate":24,"width":732,"type":"video/mp4","url":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.mp4","height":1006,"class":"VideoResourceLevel","bitrate":1325,"posterURL":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_poster.jpg"}],"width":732,"hasAudio":false,"height":1006,"class":"VideoResource"},"loop":false,"height":1080,"autoplay":true,"scaleMode":"fit_inside","width":786,"class":"Video","id":"video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6","label":trans('video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.label'),"data":{"label":"kelpwald"},"thumbnailUrl":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_t.jpg"},{"progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesEnabled":true,"displayTooltipInTouchScreens":true,"playbackBarHeadShadow":true,"progressBorderColor":"#000000","shadow":false,"width":"100%","progressBarBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"translationTransitionDuration":1000,"id":"MainViewer","progressBackgroundOpacity":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"toolTipHorizontalAlign":"center","paddingLeft":0,"surfaceReticleOpacity":0.6,"borderRadius":0,"transitionDuration":500,"paddingRight":0,"progressBarOpacity":0,"firstTransitionDuration":0,"progressBottom":0,"progressHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressBorderSize":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTop":0,"surfaceReticleSelectionOpacity":1,"progressBarBorderSize":0,"height":"100%","progressBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"subtitlesGap":0,"playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"playbackBarProgressBorderRadius":0,"subtitlesPaddingBottom":5,"toolTipShadowVerticalLength":0,"class":"ViewerArea","playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","progressBorderRadius":0,"playbackBarBorderRadius":0,"toolTipTextShadowBlurRadius":3,"doubleClickAction":"toggle_fullscreen","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","toolTipBorderSize":1,"progressLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","subtitlesShadow":false,"toolTipDisplayTime":600,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"subtitlesTextShadowBlurRadius":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowVerticalLength":1,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"borderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipShadowColor":"#333333","playbackBarHeadBorderRadius":0,"subtitlesPaddingLeft":5,"toolTipShadowOpacity":1,"subtitlesBottom":50,"displayTooltipInSurfaceSelection":true,"toolTipFontStyle":"normal","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"paddingTop":0,"toolTipBorderRadius":3,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"playbackBarProgressBorderSize":0,"paddingBottom":0,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","playbackBarHeight":10,"subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","toolTipFontFamily":"Arial","toolTipShadowBlurRadius":3,"subtitlesVerticalAlign":"bottom","playbackBarProgressOpacity":1,"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","transitionMode":"blending","toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBorderColor":"#000000","playbackBarHeadOpacity":1,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesFontWeight":"normal","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarRight":0,"subtitlesFontSize":"3vmin","progressRight":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","progressOpacity":1,"playbackBarBorderSize":0,"data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"vertical","subtitlesPaddingTop":5,"subtitlesOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarOpacity":1},{"video":{"levels":[{"framerate":24,"width":1000,"type":"video/mp4","url":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646.mp4","height":500,"class":"VideoResourceLevel","bitrate":900,"posterURL":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_poster.jpg"}],"width":1000,"hasAudio":false,"height":500,"class":"VideoResource"},"chromaColor":"#324E70","loop":false,"height":500,"autoplay":true,"scaleMode":"fit_inside","chromaThreshold":0.07,"width":1000,"class":"Video","data":{"label":"logo"},"id":"video_EADF734B_E4E2_4241_41E0_E824D9765646","label":trans('video_EADF734B_E4E2_4241_41E0_E824D9765646.label'),"chromaSmoothing":0,"thumbnailUrl":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_t.jpg"},{"video":{"levels":[{"framerate":24,"width":200,"type":"video/mp4","url":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.mp4","height":200,"class":"VideoResourceLevel","bitrate":72,"posterURL":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_poster.jpg"}],"width":200,"hasAudio":false,"height":200,"class":"VideoResource"},"chromaColor":"#0407F4","loop":false,"height":200,"autoplay":true,"scaleMode":"fit_inside","chromaThreshold":0.21,"width":200,"class":"Video","data":{"label":"ipfs"},"id":"video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8","label":trans('video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.label'),"chromaSmoothing":0.17,"thumbnailUrl":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_t.jpg"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_F6766298_E674_8449_41C2_907D1ADED367","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_E4A92A1C_EB2A_CB8E_41DF_6D38DB1570CA, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_E4A92A1C_EB2A_CB8E_41DF_6D38DB1570CA, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4A92A1C_EB2A_CB8E_41DF_6D38DB1570CA, 0)"}],"id":"playList_E4A92A1C_EB2A_CB8E_41DF_6D38DB1570CA"},{"touchControlMode":"drag_rotation","aaEnabled":true,"zoomEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"label":trans('panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55.label'),"thumbnailUrl":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_t.jpg","hfovMax":130,"overlays":["this.overlay_E87A4BFF_E693_BBC6_41E0_4B240BB53093","this.overlay_EADA4DE5_E66C_9FFB_41DB_6E48AA3C9952","this.overlay_E9CA51B1_E675_845B_41D6_271D50E0A303","this.overlay_E92C2663_E66D_8CFF_41C4_352B425ECA8F"],"vfov":61.56,"partial":false,"frames":[{"front":{"levels":[{"width":6144,"rowCount":12,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":6,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":6},{"width":1536,"rowCount":3,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":3},{"width":1024,"rowCount":2,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":1},{"width":1536,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","colCount":1},{"width":2048,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/f/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":6144,"rowCount":12,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":6,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":6},{"width":1536,"rowCount":3,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":3},{"width":1024,"rowCount":2,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":1},{"width":1536,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","colCount":1},{"width":2048,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/r/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"back":{"levels":[{"width":6144,"rowCount":12,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":6,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":6},{"width":1536,"rowCount":3,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":3},{"width":1024,"rowCount":2,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":1},{"width":1536,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","colCount":1},{"width":2048,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/b/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":6144,"rowCount":12,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":6,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":6},{"width":1536,"rowCount":3,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":3},{"width":1024,"rowCount":2,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":1},{"width":1536,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","colCount":1},{"width":2048,"rowCount":1,"url":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_0/l/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_t.jpg"}],"data":{"label":"H0000 Panorama"},"class":"Panorama","pitch":0,"hfov":360,"id":"panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55"},{"id":"panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_camera","initialPosition":{"yaw":-1.7,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85","hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10},{"video":{"levels":[{"framerate":24,"width":200,"type":"video/mp4","url":"media/video_F6766298_E674_8449_41C2_907D1ADED367.mp4","height":200,"class":"VideoResourceLevel","bitrate":72,"posterURL":"media/video_F6766298_E674_8449_41C2_907D1ADED367_poster.jpg"}],"width":200,"hasAudio":false,"height":200,"class":"VideoResource"},"chromaColor":"#F9FE0A","loop":false,"height":200,"autoplay":true,"scaleMode":"fit_inside","chromaThreshold":0.38,"width":200,"class":"Video","data":{"label":"opensea"},"id":"video_F6766298_E674_8449_41C2_907D1ADED367","label":trans('video_F6766298_E674_8449_41C2_907D1ADED367.label'),"chromaSmoothing":0.09,"thumbnailUrl":"media/video_F6766298_E674_8449_41C2_907D1ADED367_t.jpg"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55_camera","media":"this.panorama_EADA8DD5_E66C_9FDA_41E7_4C8F779FDF55","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_EADF734B_E4E2_4241_41E0_E824D9765646","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_E4A9EA1C_EB2A_CB8E_41E6_556DF35741B6, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_E4A9EA1C_EB2A_CB8E_41E6_556DF35741B6, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4A9EA1C_EB2A_CB8E_41E6_556DF35741B6, 0)"}],"id":"playList_E4A9EA1C_EB2A_CB8E_41E6_556DF35741B6"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","clickAction":"play_pause","class":"VideoPlayer","displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_E4A91A1C_EB2A_CB8E_41C6_3B6D513922CF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4A91A1C_EB2A_CB8E_41C6_3B6D513922CF, 0)"}],"id":"playList_E4A91A1C_EB2A_CB8E_41C6_3B6D513922CF"},{"video":{"levels":[{"framerate":24,"width":1000,"type":"video/mp4","url":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646.mp4","height":500,"class":"VideoResourceLevel","bitrate":900,"posterURL":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_poster.jpg"}],"width":1000,"hasAudio":false,"height":500,"class":"VideoResource"},"chromaColor":"#324E70","cues":[],"loop":true,"autoplay":true,"videoVisibleOnStop":false,"click":"if(this.overlay_E87A4BFF_E693_BBC6_41E0_4B240BB53093.get('state') != 'playing'){ this.overlay_E87A4BFF_E693_BBC6_41E0_4B240BB53093.play(); } else { this.overlay_E87A4BFF_E693_BBC6_41E0_4B240BB53093.pause(); }","enabledInCardboard":true,"chromaThreshold":0.07,"class":"VideoPanoramaOverlay","pitch":5.18,"hfov":49.87,"id":"overlay_E87A4BFF_E693_BBC6_41E0_4B240BB53093","image":"this.res_E853527B_E694_84CF_41EA_67732953D42F","distance":50,"yaw":-1.26,"useHandCursor":true,"vfov":26.25,"chromaSmoothing":0,"data":{"hasAudio":false,"label":"Video"}},{"video":{"levels":[{"framerate":24,"width":200,"type":"video/mp4","url":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.mp4","height":200,"class":"VideoResourceLevel","bitrate":72,"posterURL":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_poster.jpg"}],"width":200,"hasAudio":false,"height":200,"class":"VideoResource"},"chromaColor":"#0407F4","loop":true,"autoplay":true,"videoVisibleOnStop":false,"enabledInCardboard":true,"chromaThreshold":0.21,"class":"VideoPanoramaOverlay","pitch":3.12,"hfov":1.67,"id":"overlay_EADA4DE5_E66C_9FFB_41DB_6E48AA3C9952","image":"this.res_E81A2A22_E673_8479_41E8_B6368B685FAC","distance":50,"yaw":-166.06,"useHandCursor":true,"vfov":1.61,"chromaSmoothing":0.17,"data":{"hasAudio":false,"label":"Video"},"cues":[]},{"image":"this.res_E8079800_E674_843A_41E6_D1C117BDEBC8","distance":50,"loop":true,"video":{"levels":[{"framerate":24,"width":732,"type":"video/mp4","url":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.mp4","height":1006,"class":"VideoResourceLevel","bitrate":1325,"posterURL":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_poster.jpg"}],"width":732,"hasAudio":false,"height":1006,"class":"VideoResource"},"autoplay":true,"videoVisibleOnStop":false,"vertices":[{"yaw":-177.12,"class":"PanoramaPoint","pitch":10.81},{"yaw":-170.38,"class":"PanoramaPoint","pitch":10.74},{"yaw":-170.52,"class":"PanoramaPoint","pitch":2.06},{"yaw":-177.22,"class":"PanoramaPoint","pitch":2.08}],"data":{"hasAudio":false,"label":"Video"},"enabledInCardboard":true,"useHandCursor":true,"class":"QuadVideoPanoramaOverlay","cues":[],"id":"overlay_E9CA51B1_E675_845B_41D6_271D50E0A303"},{"video":{"levels":[{"framerate":24,"width":200,"type":"video/mp4","url":"media/video_F6766298_E674_8449_41C2_907D1ADED367.mp4","height":200,"class":"VideoResourceLevel","bitrate":72,"posterURL":"media/video_F6766298_E674_8449_41C2_907D1ADED367_poster.jpg"}],"width":200,"hasAudio":false,"height":200,"class":"VideoResource"},"chromaColor":"#F9FE0A","loop":true,"autoplay":true,"videoVisibleOnStop":false,"enabledInCardboard":true,"chromaThreshold":0.38,"class":"VideoPanoramaOverlay","pitch":3.17,"hfov":1.54,"id":"overlay_E92C2663_E66D_8CFF_41C4_352B425ECA8F","image":"this.res_F623B1B0_E66F_8459_41E5_72397DD94723","distance":50,"yaw":-168.3,"useHandCursor":true,"vfov":1.59,"chromaSmoothing":0.09,"data":{"hasAudio":false,"label":"Video"},"cues":[]},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","yawDelta":35.65},{"easing":"linear","yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","yawDelta":288700},{"easing":"cubic_out","yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","yawDelta":35.65}],"class":"PanoramaCameraSequence","id":"sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85"},{"levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_E853527B_E694_84CF_41EA_67732953D42F_0.jpg"}],"class":"ImageResource","id":"res_E853527B_E694_84CF_41EA_67732953D42F"},{"levels":[{"height":200,"width":200,"class":"ImageResourceLevel","url":"media/res_E81A2A22_E673_8479_41E8_B6368B685FAC_0.jpg"}],"class":"ImageResource","id":"res_E81A2A22_E673_8479_41E8_B6368B685FAC"},{"levels":[{"height":1080,"width":786,"class":"ImageResourceLevel","url":"media/res_E8079800_E674_843A_41E6_D1C117BDEBC8_0.jpg"}],"class":"ImageResource","id":"res_E8079800_E674_843A_41E6_D1C117BDEBC8"},{"levels":[{"height":200,"width":200,"class":"ImageResourceLevel","url":"media/res_F623B1B0_E66F_8459_41E5_72397DD94723_0.jpg"}],"class":"ImageResource","id":"res_F623B1B0_E66F_8459_41E5_72397DD94723"}],"downloadEnabled":false,"scrollBarColor":"#000000","backgroundPreloadEnabled":true,"mobileMipmappingEnabled":false,"minHeight":20,"minWidth":20,"shadow":false,"borderSize":0,"data":{"name":"Player937","defaultLocale":"de","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1}},"scrollBarVisible":"rollOver"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.12.js.map
//Generated with v2021.2.12, Thu Nov 4 2021