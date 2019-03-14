<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#516e8f" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <script defer type="text/javascript" src="dist/bundle.js"></script>
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <title>Daniel Mears – Web Developer</title>
        <meta name="description" content="Daniel Mears is a creative Web Developer based in London. He is a specialist in complex Web Javascript and CSS."/>
    </head>

    <?php 

    $path = preg_replace( "/^\//","",$_SERVER['REQUEST_URI'] );

    $pageName = preg_replace("/\.php$/","",$path);

    if ($pageName === ""){
        $pageName = "index";
    }
    
    echo('<body class="' . $pageName . "-starting-page " . $pageName . '-page static" >'); 
    
    ?>

    
        <div class="background">
            <div class="background__svg-frame">
                <svg class="casino" x="0px" y="0px" viewBox="0 0 900 560">
                    <linearGradient id="metalGradient" x1="0" x2="0.1" y1="1" y2="0">
                        <stop class="stop-1" offset="-20%"/>
                        <stop class="stop-2" offset="75%" />
                    </linearGradient>
                    <linearGradient id="oppositeGradient" x1="0.1" x2="0" y1="0" y2="1">
                        <stop class="stop-1" offset="-20%"/>
                        <stop class="stop-2" offset="75%" />
                    </linearGradient>
                    <path class="body" d="M370.3,356.9c-3.7-10.6-22-11.9-30.9-18.8 c-6.5-5.1-7.5-14-4.8-21.8c2.4-6.7,5.9-10.2,15.7-12l-0.2-46.6c-6.2-1.9-13.4-7.4-16-13.6c-3.6-8.7,2.7-17.6,10.6-22.7 c8-5.2,19.2-6.7,23.7-15.1c2.7-5.1,1.5-11.6-2-16.2c-3.5-4.6-8.7-7.5-14.1-9.5c-15.1-5.7-32.5-5.1-47.2,1.4 c-13.2,5.9-25.8,16.6-40.1,14.5c-10.8-1.6-19.3-7.5-26.8-15.4c-12.7-13.2-26-28.6-42.3-36.8c-38.1-19.3-87-10.7-119.8,16.7 c-21.2,17.7-35.8,42.2-43.6,68.5c-16.2,54.5-4.3,121.3,35.3,163.3c8,10.2,22.9,19.3,36.9,25.4c43.4,18.9,87.3,8,120.3-23.5 c9.4-9,26-27.5,38.8-30.1c17-3.4,31.2,11.5,47.7,16.9c14.1,4.5,29.8,3.8,43.4-1.9C364.2,375.6,373.5,366.4,370.3,356.9z"/>
                    <g class="pickup-switch">
                        <circle class="pickup-switch-outer" cx="172.3" cy="350" r="7.2"/>
                        <circle class="pickup-switch-inner" cx="170.5" cy="351.3" r="3.2"/>
                    </g>
                    <path class="bridge" d="M191.6,313.4c0,0.7-0.3,1.4-0.9,1.9c-1,0.6-2.6,1.5-4.8,1.6 c-2.1,0.1-3.7-0.5-4.7-1c-0.7-0.3-1.1-1-1.1-1.7c-1.2-21.7-2.4-43.3-3.6-65c0-0.8,0.4-1.6,1.2-2c1.3-0.7,3.5-1.4,6.2-1.2 c1.1,0.1,2.1,0.4,2.8,0.7c0.8,0.3,1.3,1,1.4,1.9C189.2,270,190.4,291.7,191.6,313.4z"/>
                    <g class="speed-holes">
                        <path class="left-hole" d="M235.2,342.7c-0.1,0.3-0.2,0.6-0.3,1c-1.4,4-4.8,7.1-8.3,9.4c-5.6,3.7-11.8,6.3-17.9,9.2c-3.1,1.5-6.1,3-9,4.9 c-2.3,1.5-6.2,3.6-7.2,6.4c-0.4,1.1-3.4,0.4-4.1,0.3c-2.7-0.3-5.3-0.7-8.1-0.7c-11.7,0-19.9,4.2-30.6,8.1c-0.7,0.3-3.6,1.5-4.1,2 c-2.3,2.3,1.5,4.7,1.4,7c-0.1,3.4-3.6,6.8-7.1,6.8c-6.2,0-7.9-6.6-6.9-11.1c0.3-1.2,1.5-3.1,2.2-4c2.5-3.6,7-5.4,10.8-7.4 c7.8-4,16.1-7.1,23.6-11.3c3.5-1.9,3.7-1.5,6.6-4.1c1.4-1.3,3.6-3.4,4.1-3.4c3.3-0.2,7,0.8,10.3,0.9c3.5,0.1,7.1-0.5,10.4-1.1 c9.4-1.7,19.5-4.8,26.6-11.2c-2.3-0.4-4-2.1-4-4.2c0-3.1,3.2-4.3,6-4.1C233.5,336.3,235.9,339.1,235.2,342.7z"/>
                        <path class="right-hole" d="M231.7,227c-2.8,0.2-6-1-6-4.2c0-2.1,1.7-3.9,4-4.3c-7.2-6.6-17.2-9.9-26.6-11.6c-3.4-0.6-7-1.2-10.4-1.2 c-3.3,0.1-7,1.2-10.3,0.9c-0.4,0-2.6-2.3-4.1-3.6c-3-2.7-3.2-2.2-6.6-4.2c-7.6-4.4-15.9-7.6-23.6-11.7c-3.9-2-8.3-3.9-10.8-7.6 c-0.7-1-1.9-3-2.2-4.2c-1-4.6,0.8-11.5,6.9-11.5c3.5,0,7,3.5,7.1,7c0.1,2.3-3.7,4.9-1.4,7.2c0.5,0.5,3.4,1.8,4.1,2.1 c10.7,4.1,18.9,8.4,30.6,8.4c2.7,0,5.4-0.4,8.1-0.7c0.7-0.1,3.7-0.8,4.1,0.3c1,2.8,4.9,5,7.2,6.6c2.9,1.9,5.9,3.5,9,5 c6,3,12.3,5.7,17.9,9.5c3.5,2.4,6.9,5.6,8.3,9.8c0.1,0.3,0.2,0.7,0.3,1C237.9,223.8,235.5,226.7,231.7,227z"/>
                    </g>
                    <g class="pickups">
                        <path class="neck-pickup" d="M301.7,325.1l-9.9-7.5c-0.8-0.6-1.2-1.5-1.2-2.4l0.2-70.2 c0-0.9,0.4-1.8,1.2-2.4l9.8-7.6c2.9-2.3,7-2.2,9.9,0.1l9.7,7.7c0.7,0.6,1.1,1.4,1.1,2.4l-0.2,70.2c0,0.9-0.4,1.8-1.2,2.4l-9.7,7.3 C308.4,327.2,304.5,327.2,301.7,325.1z"/>
                        <path class="bridge-pickup" d="M212.9,325.1l-9.9-7.5c-0.8-0.6-1.2-1.5-1.2-2.4L202,245 c0-0.9,0.4-1.8,1.2-2.4l9.8-7.6c2.9-2.3,7-2.2,9.9,0.1l9.7,7.7c0.7,0.6,1.1,1.4,1.1,2.4l-0.2,70.2c0,0.9-0.4,1.8-1.2,2.4l-9.7,7.3 C219.6,327.2,215.7,327.2,212.9,325.1z"/>
                    </g>
                    <g class="knobs">
                        <circle class="bridge-volume" cx="160.1" cy="394.4" r="10.6"/>
                        <circle class="neck-volume" cx="138.1" cy="356.4" r="10.6"/>
                        <circle class="bridge-tone" cx="112.1" cy="394.4" r="10.6"/>
                        <circle class="neck-tone" cx="90.1" cy="356.4" r="10.6"/>
                    </g>
                    <g class="tuners">
                        <path class="first-tuner" d="M775.1,245.5c0-2.7-3.1-4.9-7-4.9c-3.9,0-7.3,2.2-7.3,4.9 c0,2.4,2.7,4.4,5.7,4.8v3.1l2,0.3v-3.3C772.5,250.1,775.1,248,775.1,245.5z"/> 
                        <path class="second-tuner" d="M801.9,245.5c0-2.7-3-4.9-6.9-4.9c-3.9,0-7.3,2.2-7.3,4.9 c0,2.4,2.8,4.5,5.8,4.8v4.7l2,0v-4.7C799.5,249.9,801.9,247.9,801.9,245.5z"/>
                        <path class="third-tuner" d="M832.3,243.5c0-2.7-3.2-4.9-7.1-4.9c-3.9,0-7.1,2.3-7.1,5 c0,2.4,2.2,4.9,5.4,4.9h0v3.8l2-0.3v-3.6C828.5,248.2,832.3,246.1,832.3,243.5z"/>
                        <path class="fourth-tuner" d="M832.2,320.4c0,2.7-3.1,4.9-7.1,4.9c-3.9,0-7.3-2.2-7.3-4.9 c0-2.2,2.7-4,4.7-4.6v-4.4l2,0.3v3.8c0.3,0,0.4-0.1,0.5-0.1c0,0,0.1,0,0.1,0C829,315.5,832.2,317.8,832.2,320.4z"/>
                        <path class="fifth-tuner" d="M797,313.6c-0.1,0,0.5,0-0.5,0v-4.7l-2-0.1v4.9 c-2,0.6-4.7,2.5-4.7,4.7c0,2.7,3.3,4.9,7.3,4.9c3.9,0,7.1-2.2,7.1-4.9S800.9,313.6,797,313.6z"/>
                        <path class="sixth-tuner" d="M768.5,313.6v-3.7l-2,0.2v3.5c-3,0.4-5.7,2.4-5.7,4.8 c0,2.7,3.3,4.9,7.3,4.9c3.9,0,7-2.2,7-4.9C775.1,315.9,772.5,313.9,768.5,313.6z"/>
                    </g>
                    <path class="neck" d="M324.5,305.6l393.4-6c3.4,0,10.4,0.5,17.7,4.5 c5.5,3,9,6.8,10.9,9.3c11.1-2.4,24.5-4.3,39.8-4.6c25-0.4,45.9,3.8,61,8.2c1.7-2.8,4.2-6.2,7.7-9.6c4.2-4.2,8.5-7,11.8-8.8 c0.6-1.3,1.8-4.1,1.6-7.8c-0.3-4.6-2.5-7.8-3.4-8.9c0.9-0.9,2.7-3.1,3.4-6.5c0.9-4.4-0.8-7.9-1.4-8.9c-3.2-2-7.3-5-11.3-9.1 c-3.7-3.8-6.3-7.6-8.2-10.7c-13.6,4.1-32.8,8.3-56,8.3c-17.8,0-33-2.5-44.8-5.3c-2.2,2.6-6.4,6.9-13,10c-6.2,2.9-11.7,3.5-15,3.6 c-131.4-1.9-262.8-3.8-394.2-5.7V305.6z"/>
                    <g class="tailpiece">
                        <rect class="tailpiece-bridge" x="105.8" y="247.3" width="13.2" height="67.9"/>
                        <path class="tailpiece-wishbone" d="M23.5,275.3l1.1-0.2l0.6-7.9c1.9,0.5,5.1-0.3,6.7,0.9 c1.5,1.2,3.6,1.7,4.8,1.8c1.7,0.1,0.8-1.4,2-2.9c0.2-0.3-0.3,0.2,0,0c1.2-0.7,4.2,0.2,4.7-1c0.5-1.3,1.4-3,3-3.2 c0.1,0,41.4-7.1,47-8.1c0.4-0.1,0.8-0.1,1.3-0.1h10.9v2H105h-9.8c-0.9,0-1.8,0.1-2.6,0.2l-45.3,8.1c-1.9,1.3-1.3,3.8-1.3,5.8 c0,1.7,0,3.3,0,4.9c0,2.1,0,3.7,0,5.8c0,2.1,0,3.1,0,5.2c0,1.7,0,3.3,0,4.9c0,2-0.6,4.5,1.3,5.8l45.3,8.1c0.9,0.2,1.8,0.2,2.6,0.2 h9.8h0.5v2H94.6c-0.4,0-0.8,0-1.3-0.1c-5.6-1-46.9-8.1-47-8.1c-1.6-0.3-2.4-1.9-3-3.2c-0.5-1.2-3.5-0.3-4.7-1c-0.3-0.2,0.2,0.3,0,0 c-1.2-1.5-0.3-3-2-2.9c-1.2,0.1-3.3,0.6-4.8,1.8c-1.5,1.2-4.8-0.2-6.7,0.3l-0.4-7.3l-1.3-0.3c-0.3-1.4-0.6-3.1-0.7-5.1 C22.8,279.1,23.1,276.9,23.5,275.3z"/>
                    </g>
                    <g class="tuning-pins">
                        <circle class="first-pin" cx="768.4" cy="263.4" r="4.1"/>
                        <circle class="second-pin" cx="796.4" cy="264.4" r="4.1"/>
                        <circle class="third-pin" cx="824.4" cy="262.4" r="4.1"/>
                        <circle class="fourth-pin" cx="824.4" cy="301.4" r="4.1"/>
                        <circle class="fifth-pin" cx="796.4" cy="300.4" r="4.1"/>
                        <circle class="sixth-pin" cx="767.4" cy="299.4" r="4.1"/>
                    </g>
                    <g class="frets">
                        <rect class="open-fret" x="715.5" y="263.3" width="4.3" height="36.3"/>
                        <rect class="first-fret" x="684" y="262.9" width="1.9" height="37.2"/>
                        <rect class="second-fret" x="656.1" y="262.5" width="1.9" height="38"/>
                        <rect class="third-fret" x="629.1" y="262.1" width="1.9" height="38.9"/>
                        <rect class="fourth-fret" x="603.8" y="261.7" width="1.9" height="39.6"/>
                        <rect class="fifth-fret" x="580.3" y="261.4" width="1.9" height="40.3"/>
                        <rect class="sixth-fret" x="557.5" y="261" width="1.9" height="41"/>
                        <rect class="seventh-fret" x="536.4" y="260.7" width="1.9" height="41.6"/>
                        <rect class="eighth-fret" x="516.6" y="260.4" width="1.9" height="42.2"/>
                        <rect class="ninth-fret" x="497.8" y="260.2" width="1.9" height="42.8"/>
                        <rect class="tenth-fret" x="480" y="259.9" width="1.9" height="43.3"/>
                        <rect class="eleventh-fret" x="463.2" y="259.7" width="1.9" height="43.8"/>
                        <rect class="twelth-fret" x="447.1" y="259.4" width="1.9" height="44.3"/>
                        <rect class="thirteenth-fret" x="432.7" y="259.2" width="1.9" height="44.7"/>
                        <rect class="fourteenth-fret" x="418.7" y="259" width="1.9" height="45.1"/>
                        <rect class="fifteenth-fret" x="405.1" y="258.8" width="1.9" height="45.5"/>
                        <rect class="sixteenth-fret" x="392.8" y="258.6" width="1.9" height="45.9"/>
                        <rect class="seventeenth-fret" x="381.1" y="258.5" width="1.9" height="46.3"/>
                        <rect class="eighteenth-fret" x="370" y="258.3" width="1.9" height="46.6"/>
                        <rect class="nineteenth-fret" x="359.4" y="258.2" width="1.9" height="46.9"/>
                        <rect class="twentieth-fret" x="349.5" y="258" width="1.9" height="47.2"/>
                        <rect class="twenty-first-fret" x="340.2" y="257.9" width="1.9" height="47.5"/>
                        <rect class="twenty-second-fret" x="332" y="257.8" width="1.9" height="47.7"/>
                        <rect class="end-fret" x="324.5" y="257.6" width="1.9" height="47.9"/>
                    </g>
                    <g class="strings">
                        <polyline class="first-string" points="119,260.5 186,260.5 718.7,266.5 765.7,266.4"/>
                        <polyline class="second-string" points="119,269.5 186,269.5 722.3,272.7 793,266.6"/>
                        <polyline class="third-string" points="119,276.5 186,276.5 717.2,278.8 821.7,265.4"/>
                        <polyline class="fourth-string" points="119,302.5 186,302.5 718.7,296.5 764,297"/>
                        <polyline class="fifth-string" points="119,293.6 188,293.5 724.3,290.8 795.6,296.4"/>
                        <polyline class="sixth-string" points="119,286.4 184,286.5 715.2,284.4 820.9,299.2"/>
                    </g>
                </svg>
            </div>
            <div class="background__overlay">
            </div>
            <div class="background__shade">
            </div>
        </div>
        <header class="header">
            <div class="header__titles">
                <h1 class="header__title">Daniel Mears</h1>
                <h1 class="header__subtitle">Web Developer</h1>
            </div>
            <div class="header__color-wipe">
            </div>
            <nav class="header__nav">
                <ul>
                    <li class="header__nav-about">
                        <a href="/about.php">About</a>
                    </li>
                    <li class="header__nav-tech">
                        <a href="/tech.php">Tech</a>
                    </li>
                    <li class="header__nav-examples" >
                        <a href="/examples.php">Examples</a>
                    </li>
                </ul>
                <div class="header__nav-trigger-container">
                    <button class="header__nav-trigger">
                    </button>
                    <span class="header__nav-svg-frame">
                        <svg x="0px" y="0px" height="100%" width="100%" viewBox="0 0 40 30" >
                            <path style="fill:#516E8F;" d="M26.2,22.3H7.7c-0.9,0-1.5-0.8-1.2-1.6l0.6-1.4c0.2-0.4,0.7-0.7,1.2-0.7h18.6c0.9,0,1.6,0.9,1.2,1.6 l-0.7,1.4C27.2,22,26.7,22.3,26.2,22.3z"/>
                            <path style="fill:#516E8F;" d="M31.6,11.4H13.1c-0.9,0-1.5-0.8-1.2-1.6l0.6-1.4c0.2-0.4,0.7-0.7,1.2-0.7h18.6c0.9,0,1.6,0.9,1.2,1.6 l-0.7,1.4C32.6,11.2,32.1,11.4,31.6,11.4z"/>
                            <path style="fill:#516E8F;" d="M28.9,16.8H10.4c-0.9,0-1.5-0.8-1.2-1.6l0.6-1.4c0.2-0.4,0.7-0.7,1.2-0.7h18.6c0.9,0,1.6,0.9,1.2,1.6 l-0.7,1.4C29.9,16.6,29.4,16.8,28.9,16.8z"/>
                        </svg>
                    </span>
                </div>
            </nav>
        </header>