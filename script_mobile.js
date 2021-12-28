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
    var d = {"minWidth":20,"data":{"name":"Player615","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"de"},"scrollBarMargin":2,"children":["this.MainViewer_mobile"],"width":"100%","backgroundColorDirection":"vertical","gap":10,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarWidth":10,"paddingTop":0,"overflow":"hidden","id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"scripts":{"mixObject":TDV.Tour.Script.mixObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"translate":TDV.Tour.Script.translate,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initQuiz":TDV.Tour.Script.initQuiz,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showWindow":TDV.Tour.Script.showWindow,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"shareSocial":TDV.Tour.Script.shareSocial,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia},"vrPolyfillScale":0.75,"scrollBarColor":"#000000","height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","mediaActivationMode":"window","downloadEnabled":false,"borderRadius":0,"backgroundPreloadEnabled":true,"class":"Player","backgroundOpacity":1,"desktopMipmappingEnabled":false,"contentOpaque":false,"scrollBarVisible":"rollOver","borderSize":0,"start":"this.init()","shadow":false,"menu":["this.TDVAuthor"],"minHeight":20,"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"video":{"height":1080,"width":1440,"class":"VideoResource","levels":[{"width":1440,"type":"application/x-mpegurl","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel"},{"width":1440,"type":"video/mp4","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel","bitrate":1057}]},"autoplay":true,"chromaSmoothing":0.27,"loop":false,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","chromaColor":"#FDFDFD","height":1080,"width":1440,"chromaThreshold":0.01,"label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"Video","data":{"label":"mantra"},"scaleMode":"fit_inside"},{"clickAction":"play_pause","displayPlayOverlay":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","class":"VideoPlayer","id":"MainViewer_mobileVideoPlayer"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":false,"thumbnailUrl":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_t.jpg","chromaColor":"#324E70","height":500,"width":1000,"chromaThreshold":0.21,"label":trans('video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.label'),"id":"video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"Video","data":{"label":"glitch_logo"},"scaleMode":"fit_inside"},{"displayPlaybackBar":true,"arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobileVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_0E8CC96B_017C_89FE_4154_DB8AA80C2B14, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_0E8CC96B_017C_89FE_4154_DB8AA80C2B14, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0E8CC96B_017C_89FE_4154_DB8AA80C2B14, 0)"}],"id":"playList_0E8CC96B_017C_89FE_4154_DB8AA80C2B14"},{"hfovMax":130,"label":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.label'),"frames":[{"back":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"front":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"right":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"CubicPanoramaFrame","left":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"Panorama","pitch":0,"vfov":62.32,"hfov":360,"partial":false,"overlays":["this.overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0","this.overlay_6C3E4F56_6260_0773_41B8_76F85C93723F","this.overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D","this.overlay_A79150C0_AABC_6606_41D8_559299FEAD00","this.overlay_CF67A5C0_C2DE_DDDC_41BF_B4FCD780651A","this.overlay_0CB2330C_0175_F93A_4165_801599FECE81","this.overlay_0FA56748_0174_B93B_415F_00FFF73E1188"],"data":{"subtitle":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.subtitle','panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.data.subtitle'),"label":"Naglschmid Store"},"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera","media":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingRight":3,"playbackBarProgressBorderRadius":0,"playbackBarBottom":5,"subtitlesPaddingTop":5,"toolTipOpacity":1,"translationTransitionDuration":1000,"width":"100%","id":"MainViewer_mobile","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":1.5,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"transitionDuration":500,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"height":"100%","toolTipPaddingBottom":2,"subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":2,"progressRight":0,"playbackBarHeadShadowHorizontalLength":0,"progressOpacity":1,"class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"subtitlesGap":0,"toolTipDisplayTime":600,"borderSize":0,"toolTipShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"minWidth":50,"progressBarBorderColor":"#000000","minHeight":25,"progressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","toolTipShadowSpread":0,"toolTipBorderRadius":1,"doubleClickAction":"toggle_fullscreen","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBorderColor":"#000000","propagateClick":false,"playbackBarProgressOpacity":1,"subtitlesPaddingLeft":5,"playbackBarHeadOpacity":1,"paddingTop":0,"toolTipPaddingLeft":3,"vrPointerSelectionColor":"#FF6600","surfaceReticleOpacity":0.6,"progressBarOpacity":1,"playbackBarHeight":10,"subtitlesBottom":50,"playbackBarHeadHeight":15,"paddingBottom":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":1,"subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal","progressHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowColor":"#000000","displayTooltipInTouchScreens":true,"progressBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"progressBarBorderRadius":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipShadowBlurRadius":1,"progressBottom":0,"playbackBarOpacity":1,"playbackBarHeadShadowColor":"#000000","progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"subtitlesOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"subtitlesPaddingRight":5,"transitionMode":"blending","vrPointerColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"subtitlesEnabled":true,"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontStyle":"normal","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowVerticalLength":0,"playbackBarRight":0,"toolTipShadowHorizontalLength":0,"shadow":false,"data":{"name":"Main Viewer"}},{"class":"PlayList","items":[{"player":"this.MainViewer_mobileVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","media":"this.video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_0E8F296B_017C_89FE_4172_B1D7BD4BBB56, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_0E8F296B_017C_89FE_4172_B1D7BD4BBB56, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0E8F296B_017C_89FE_4172_B1D7BD4BBB56, 0)"}],"id":"playList_0E8F296B_017C_89FE_4172_B1D7BD4BBB56"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D","distance":50,"vertices":[{"yaw":-177.82,"class":"PanoramaPoint","pitch":18.9},{"yaw":-162.44,"class":"PanoramaPoint","pitch":17.88},{"yaw":-162.42,"class":"PanoramaPoint","pitch":-3.54},{"yaw":-177.84,"class":"PanoramaPoint","pitch":-3.65}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"kelpwald"}}],"data":{"label":"kelpwald"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"class":"HotspotPanoramaOverlay","id":"overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0"},{"maps":[],"enabledInCardboard":true,"items":[{"vertices":[{"yaw":-161.4,"class":"PanoramaPoint","pitch":17.71},{"yaw":-154.8,"class":"PanoramaPoint","pitch":16.8},{"yaw":-154.9,"class":"PanoramaPoint","pitch":7.6},{"yaw":-161.26,"class":"PanoramaPoint","pitch":8.21}],"image":{"class":"ImageResource","levels":[{"height":314,"width":221,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_pkzp3yon.png"}]},"distance":50,"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Text"}}],"data":{"label":"Text"},"useHandCursor":false,"areas":["this.HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"],"class":"HotspotPanoramaOverlay","id":"overlay_6C3E4F56_6260_0773_41B8_76F85C93723F"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B","distance":50,"vertices":[{"yaw":54.5,"class":"PanoramaPoint","pitch":24.85},{"yaw":79.47,"class":"PanoramaPoint","pitch":29.35},{"yaw":79.73,"class":"PanoramaPoint","pitch":-29.21},{"yaw":54.5,"class":"PanoramaPoint","pitch":-25.15}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Cryptoshells_Collection"}}],"data":{"label":"Cryptoshells_Collection"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"],"class":"HotspotPanoramaOverlay","id":"overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":true,"vertices":[{"yaw":-30.55,"class":"PanoramaPoint","pitch":22.91},{"yaw":29.36,"class":"PanoramaPoint","pitch":22.93},{"yaw":28.66,"class":"PanoramaPoint","pitch":-5.08},{"yaw":-30.55,"class":"PanoramaPoint","pitch":-5.01}],"useHandCursor":true,"chromaThreshold":0.21,"chromaColor":"#324E70","id":"overlay_A79150C0_AABC_6606_41D8_559299FEAD00","image":"this.res_A772D529_AAAC_AE06_41E4_258F3A1FB62E","distance":50,"videoVisibleOnStop":false,"cues":[],"class":"QuadVideoPanoramaOverlay","enabledInCardboard":true,"data":{"hasAudio":false,"label":"Logo"}},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22","distance":50,"yaw":8.73,"horizontalAlign":"center","vfov":2.43,"hfov":8.59,"class":"HotspotPanoramaOverlayImage","data":{"label":"inspired x public"},"verticalAlign":"middle","pitch":7.2,"scaleMode":"fit_inside"}],"data":{"label":"inspired x public"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CE00D62D_C2DE_DEA4_41D1_1CF4D85CC15E"],"class":"HotspotPanoramaOverlay","id":"overlay_CF67A5C0_C2DE_DDDC_41BF_B4FCD780651A"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_0E3D8ECC_017C_8B3B_4140_F94767728954","distance":50,"yaw":-98.25,"horizontalAlign":"center","vfov":37.17,"hfov":36.44,"class":"HotspotPanoramaOverlayImage","data":{"label":"artificial"},"verticalAlign":"middle","pitch":-2.21,"scaleMode":"fit_inside"}],"data":{"label":"artificial"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"],"class":"HotspotPanoramaOverlay","id":"overlay_0CB2330C_0175_F93A_4165_801599FECE81"},{"maps":[],"enabledInCardboard":true,"items":[{"pitch":-10.6,"hfov":28.66,"distance":50,"yaw":-27.09,"image":{"class":"ImageResource","levels":[{"height":69,"width":980,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_lr6h4ncf.png"}]},"horizontalAlign":"left","class":"HotspotPanoramaOverlayImage","vfov":2.06,"verticalAlign":"top"}],"data":{"label":"Text"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"],"class":"HotspotPanoramaOverlay","id":"overlay_0FA56748_0174_B93B_415F_00FFF73E1188"},{"class":"ImageResource","levels":[{"height":1131,"width":800,"class":"ImageResourceLevel","url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png"}],"id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"},{"class":"ImageResource","levels":[{"height":2000,"width":1000,"class":"ImageResourceLevel","url":"media/res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B_0.png"}],"id":"res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_0EA6B539_017C_995D_4144_21B8507C7EE4.source'), '_blank')","id":"HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"},{"class":"ImageResource","levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_A772D529_AAAC_AE06_41E4_258F3A1FB62E_0.jpg"}],"id":"res_A772D529_AAAC_AE06_41E4_258F3A1FB62E"},{"class":"ImageResource","levels":[{"height":75,"width":265,"class":"ImageResourceLevel","url":"media/res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22_0.png"}],"id":"res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_CE00D62D_C2DE_DEA4_41D1_1CF4D85CC15E"},{"class":"ImageResource","levels":[{"height":1132,"width":800,"class":"ImageResourceLevel","url":"media/res_0E3D8ECC_017C_8B3B_4140_F94767728954_0.png"}],"id":"res_0E3D8ECC_017C_8B3B_4140_F94767728954"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"}]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Tue Dec 28 2021