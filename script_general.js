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
    var d = {"minWidth":20,"data":{"name":"Player615","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"de"},"scrollBarMargin":2,"children":["this.MainViewer"],"width":"100%","backgroundColorDirection":"vertical","gap":10,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarWidth":10,"paddingTop":0,"overflow":"hidden","id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"scripts":{"translate":TDV.Tour.Script.translate,"quizShowScore":TDV.Tour.Script.quizShowScore,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"getKey":TDV.Tour.Script.getKey,"shareSocial":TDV.Tour.Script.shareSocial,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMapLocation":TDV.Tour.Script.setMapLocation,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData},"vrPolyfillScale":0.75,"scrollBarColor":"#000000","height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","mediaActivationMode":"window","downloadEnabled":false,"borderRadius":0,"backgroundPreloadEnabled":true,"class":"Player","backgroundOpacity":1,"desktopMipmappingEnabled":false,"contentOpaque":false,"scrollBarVisible":"rollOver","borderSize":0,"start":"this.init()","shadow":false,"menu":["this.TDVAuthor"],"minHeight":20,"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_A49552A6_AAAC_AA0A_41E3_1FC0DD2D6506, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_A49552A6_AAAC_AA0A_41E3_1FC0DD2D6506, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A49552A6_AAAC_AA0A_41E3_1FC0DD2D6506, 0)"}],"id":"playList_A49552A6_AAAC_AA0A_41E3_1FC0DD2D6506"},{"class":"PlayList","items":[{"camera":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera","media":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"clickAction":"play_pause","displayPlayOverlay":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","id":"MainViewerVideoPlayer"},{"displayPlaybackBar":true,"arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"video":{"height":1080,"width":1440,"class":"VideoResource","levels":[{"width":1440,"type":"application/x-mpegurl","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel"},{"width":1440,"type":"video/mp4","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel","bitrate":1057}]},"autoplay":true,"chromaSmoothing":0.27,"loop":false,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","chromaColor":"#FDFDFD","height":1080,"width":1440,"chromaThreshold":0.01,"label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"Video","data":{"label":"mantra"},"scaleMode":"fit_inside"},{"toolTipPaddingRight":6,"playbackBarProgressBorderRadius":0,"playbackBarBottom":5,"subtitlesPaddingTop":5,"toolTipOpacity":1,"translationTransitionDuration":1000,"width":"100%","id":"MainViewer","subtitlesFontColor":"#FFFFFF","paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarHeadShadowVerticalLength":0,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"transitionDuration":500,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"height":"100%","toolTipPaddingBottom":4,"subtitlesTextDecoration":"none","toolTipBorderSize":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":4,"progressRight":0,"progressOpacity":1,"class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"subtitlesGap":0,"toolTipDisplayTime":600,"borderSize":0,"toolTipShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"minWidth":100,"progressBarBorderColor":"#000000","minHeight":50,"progressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","toolTipShadowSpread":0,"toolTipBorderRadius":3,"doubleClickAction":"toggle_fullscreen","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBorderColor":"#000000","propagateClick":false,"playbackBarProgressOpacity":1,"subtitlesPaddingLeft":5,"playbackBarHeadOpacity":1,"paddingTop":0,"toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","surfaceReticleOpacity":0.6,"progressBarOpacity":1,"playbackBarHeight":10,"subtitlesBottom":50,"playbackBarHeadHeight":15,"paddingBottom":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":3,"subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal","progressHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowColor":"#000000","displayTooltipInTouchScreens":true,"progressBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"progressBarBorderRadius":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipShadowBlurRadius":3,"progressBottom":0,"playbackBarOpacity":1,"playbackBarHeadShadowColor":"#000000","progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"subtitlesOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"subtitlesPaddingRight":5,"subtitlesTextShadowVerticalLength":1,"transitionMode":"blending","vrPointerColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"subtitlesEnabled":true,"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontStyle":"normal","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"playbackBarRight":0,"toolTipShadowHorizontalLength":0,"shadow":false,"data":{"name":"Main Viewer"}},{"hfovMax":130,"label":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.label'),"frames":[{"back":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"front":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"right":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"CubicPanoramaFrame","left":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"Panorama","pitch":0,"vfov":62.32,"hfov":360,"partial":false,"overlays":["this.overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0","this.overlay_6C3E4F56_6260_0773_41B8_76F85C93723F","this.overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D","this.overlay_A79150C0_AABC_6606_41D8_559299FEAD00"],"data":{"subtitle":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.subtitle','panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.data.subtitle'),"label":"Naglschmid Store"},"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":false,"thumbnailUrl":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_t.jpg","chromaColor":"#324E70","height":500,"width":1000,"chromaThreshold":0.21,"label":trans('video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.label'),"id":"video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"Video","data":{"label":"glitch_logo"},"scaleMode":"fit_inside"},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_A495A2A6_AAAC_AA0A_41E1_1601444CE356, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_A495A2A6_AAAC_AA0A_41E1_1601444CE356, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A495A2A6_AAAC_AA0A_41E1_1601444CE356, 0)"}],"id":"playList_A495A2A6_AAAC_AA0A_41E1_1601444CE356"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"maps":[],"enabledInCardboard":true,"items":[{"distance":50,"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"kelpwald"},"vertices":[{"yaw":-177.82,"class":"PanoramaPoint","pitch":18.9},{"yaw":-162.44,"class":"PanoramaPoint","pitch":17.88},{"yaw":-162.42,"class":"PanoramaPoint","pitch":-3.54},{"yaw":-177.84,"class":"PanoramaPoint","pitch":-3.65}],"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"}],"data":{"label":"kelpwald"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"class":"HotspotPanoramaOverlay","id":"overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0"},{"maps":[],"enabledInCardboard":true,"items":[{"vertices":[{"yaw":-161.4,"class":"PanoramaPoint","pitch":17.71},{"yaw":-154.8,"class":"PanoramaPoint","pitch":16.8},{"yaw":-154.9,"class":"PanoramaPoint","pitch":7.6},{"yaw":-161.26,"class":"PanoramaPoint","pitch":8.21}],"distance":50,"image":{"class":"ImageResource","levels":[{"height":314,"width":221,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_pkzp3yon.png"}]},"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Text"}}],"data":{"label":"Text"},"useHandCursor":false,"areas":["this.HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"],"class":"HotspotPanoramaOverlay","id":"overlay_6C3E4F56_6260_0773_41B8_76F85C93723F"},{"maps":[],"enabledInCardboard":true,"items":[{"distance":50,"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Cryptoshells_Collection"},"vertices":[{"yaw":54.5,"class":"PanoramaPoint","pitch":24.85},{"yaw":79.47,"class":"PanoramaPoint","pitch":29.35},{"yaw":79.73,"class":"PanoramaPoint","pitch":-29.21},{"yaw":54.5,"class":"PanoramaPoint","pitch":-25.15}],"image":"this.res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"}],"data":{"label":"Cryptoshells_Collection"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"],"class":"HotspotPanoramaOverlay","id":"overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":true,"vertices":[{"yaw":-30.55,"class":"PanoramaPoint","pitch":22.91},{"yaw":29.36,"class":"PanoramaPoint","pitch":22.93},{"yaw":28.66,"class":"PanoramaPoint","pitch":-5.08},{"yaw":-30.55,"class":"PanoramaPoint","pitch":-5.01}],"useHandCursor":true,"chromaThreshold":0.21,"chromaColor":"#324E70","image":"this.res_A772D529_AAAC_AE06_41E4_258F3A1FB62E","id":"overlay_A79150C0_AABC_6606_41D8_559299FEAD00","distance":50,"videoVisibleOnStop":false,"cues":[],"class":"QuadVideoPanoramaOverlay","enabledInCardboard":true,"data":{"hasAudio":false,"label":"Logo"}},{"class":"ImageResource","levels":[{"height":1131,"width":800,"class":"ImageResourceLevel","url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png"}],"id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"},{"class":"ImageResource","levels":[{"height":2000,"width":1000,"class":"ImageResourceLevel","url":"media/res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B_0.png"}],"id":"res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"},{"class":"ImageResource","levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_A772D529_AAAC_AE06_41E4_258F3A1FB62E_0.jpg"}],"id":"res_A772D529_AAAC_AE06_41E4_258F3A1FB62E"}]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Sat Dec 11 2021