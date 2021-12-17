'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">test documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' : 'data-target="#xs-controllers-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' :
                                            'id="xs-controllers-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' : 'data-target="#xs-injectables-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' :
                                        'id="xs-injectables-links-module-AppModule-27b8bdec2999d8d102d8d5b6a372f9a06944081c7089d7edc1a2a3645ef6bc1fec4933280077bd2d10c4e9311e63a7d6620e842689bad3bfc8c951b93a9f83e3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' : 'data-target="#xs-controllers-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' :
                                            'id="xs-controllers-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' : 'data-target="#xs-injectables-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' :
                                        'id="xs-injectables-links-module-AuthModule-8da7d6599197bbd671fcc57ddec532fef09b15784b9caf1c52d424e120a8d84e723fa919e0afd1aff373ddcd685ee55d387a675efae146dcd266df0df875b469"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DiscordStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscordStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GithubStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GithubStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Gitlabtrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Gitlabtrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LinkedinStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkedinStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpotidyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpotidyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/YoutubeStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YoutubeStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GithubModule.html" data-type="entity-link" >GithubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' : 'data-target="#xs-controllers-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' :
                                            'id="xs-controllers-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' }>
                                            <li class="link">
                                                <a href="controllers/GithubController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GithubController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' : 'data-target="#xs-injectables-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' :
                                        'id="xs-injectables-links-module-GithubModule-5055af94f8c7d23e64b19bcdf3c2486ec8c9ad67101b144df2477eb49be3997047eda54413e16bf25480c148a9a6645fc32d4bd9f3c0e7548db7a0649906253d"' }>
                                        <li class="link">
                                            <a href="injectables/GithubService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GithubService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpotifyModule.html" data-type="entity-link" >SpotifyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' : 'data-target="#xs-controllers-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' :
                                            'id="xs-controllers-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' }>
                                            <li class="link">
                                                <a href="controllers/SpotifyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpotifyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' : 'data-target="#xs-injectables-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' :
                                        'id="xs-injectables-links-module-SpotifyModule-bfba95d85358d2ec1339d255e1830c52199b3d3811fa030267f4e7c255e46ac3a0ac2bac1c2b2cb1bb11635fe3d429964a2f1afaf4c3e39f78da312551094a41"' }>
                                        <li class="link">
                                            <a href="injectables/SpotifyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpotifyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' : 'data-target="#xs-controllers-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' :
                                            'id="xs-controllers-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' : 'data-target="#xs-injectables-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' :
                                        'id="xs-injectables-links-module-UsersModule-aae62e6a4bbba7a066729a9c20f518b11d37f9086fabd2547d2e4c6c54040c0705c54c692d7d13c74ed54a0b4b95606ae69a73003f4b8508a5179a462cfabea6"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});