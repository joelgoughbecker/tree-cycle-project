
var widthRect = 30;
var heightRect = 30;
let slider;
let angle = 0;

let value = 0;

function preload() {
  //windy = loadSound('images/windy.mp3');
}

function setup() {
  createCanvas(800, 800); //sie of the canvas
  
  
slider = createSlider(0, 250, 20);
  slider.position(410, 70);
  slider.style('width', '80px');



}

function draw() {
  // image(img1,0,0,-20,-20)
    
let val = slider.value();

if (val > 0){
  background(158, 229, 221); //color of the background
  //windy.loop();
  
  
    fill(255, 201, 0 )
    stroke(255, 201, 0 )
    ellipse(400, 200, 600, 600);
  
    fill(18, 176, 40)
    stroke(18, 176, 40 )
    rect(-0, 700 ,800)
    
    
    
    tree();
  fill(5, 255, 0  );
  fill(5, 255, 0  );
    noStroke();

  

  ellipse(107,395,30)
  
  ellipse( 107,395,30)
  
  ellipse(117,465,30)
  
  ellipse(106,460,30)
  
  ellipse(85 ,454,30)
  
  ellipse(77, 441,30)
  
  ellipse(74 ,425,30)
  
  ellipse(71 ,410,30)
  
  ellipse(67 ,395,30)
  
  ellipse(71 ,376,30)
  
  ellipse(72 ,366,30)
  
  ellipse(78 ,352,30)
  
  ellipse( 88 ,323,30)
  
  ellipse(98 ,306,30)
  
  ellipse( 112 ,287,30)
  
  ellipse(144 ,262,30)
  
  ellipse(180 ,223,30)
  
  ellipse( 159 ,231,30)
  
  ellipse(120 ,245,30)
  
  ellipse(105 ,256,30)
  
  ellipse(129 ,244,30)
  
  ellipse( 156 ,211 ,30)
  
  ellipse(200 ,190 ,30)
  
  ellipse(234 ,182,30)
  
  ellipse(252 ,176,30)
  
  ellipse(286 ,166,30)
  
  ellipse(319 ,159,30)
  
  ellipse(358 ,153,30)
  
  ellipse(387 ,152,30)
  
  ellipse(410 ,152,30)
  
  ellipse(437 ,153,30)
  
  ellipse(460 ,156,30)
  
  ellipse(497 ,163,30)
  
  ellipse(500 ,163,30)
  
  ellipse(532 ,166,30)
  
  ellipse(540 ,174,30)
  
  ellipse(555 ,179,30)
  
  ellipse(580 ,186,30)
  
  ellipse(590 ,193,30)
  
  ellipse(622 ,217,30)
  
  ellipse(647 ,237,30)
  
  ellipse(660 ,268,30)
  
  ellipse(672 ,282,30)
  
  ellipse(686 ,303,30)
  
  ellipse(699 ,334,30)
  
  ellipse(705 ,352,30)
  
  ellipse(710 ,366,30)
  
  ellipse(706 ,392,30)
  
  ellipse(700 ,436,30)
  
  ellipse(692 ,458,30)
  
  ellipse(632 ,442,30)
  
  ellipse(617 ,436,30)
  
  ellipse(600 ,429,30)
  
  ellipse(582 ,428,30)
  
  ellipse(547 ,431,30)
  
  ellipse(519 ,429,30)
  
  ellipse(498 ,427,30)
  
  ellipse(469 ,427,30)
  
  ellipse(400 ,432,30)
  
  ellipse(371 ,434),30
  
  ellipse( 354 ,438,30)
  
  ellipse(324 ,436,30)
  
  ellipse(275 ,436,30)
  
  ellipse(257 ,440,30)
  
  ellipse(221 ,444,30)
  
  ellipse(169 ,458,30)
  
  ellipse(144 ,461,30)
  
  ellipse(123 ,466,30)
  
  ellipse(174 ,462,30)
  
  ellipse(227 ,453,30)
  
  ellipse(253 ,453,30)
  
  ellipse(311 ,468,30)
  
  ellipse(337 ,477,30)
  
  ellipse(353 ,484,30)
  
  ellipse(370 ,486,30)
  
  ellipse(390 ,478,30)
  
  ellipse(420 ,468,30)
  
  ellipse(456 ,466,30)
  
  ellipse(469 ,465,30)
  
  ellipse(494 ,470,30)
  
  ellipse(541 ,475,30)
  
  ellipse(554 ,480,30)
  
  ellipse(592 ,485,30)
  
  ellipse(597 ,486,30)
  
  ellipse(625 ,482,30)
  
  ellipse(631 ,477,30)
  
  ellipse(671 ,472,30)
  
  ellipse(682 ,464,30)
  
  ellipse(695 ,460,30)
  
  ellipse(711 ,448,30)
  
  ellipse(713 ,446)
  
  ellipse(719 ,435,30)
  
  ellipse(727 ,419,30)
  
  ellipse(726 ,398,30)
  
  ellipse(726 ,388,30)
  
  ellipse(725 ,368,30)
  
  ellipse(724 ,365,30)
  
  ellipse(723 ,353,30)
  
  ellipse(715 ,325,30)
  
  ellipse(708 ,315,30)
  
  ellipse(697 ,296,30)
  
  ellipse(691 ,286,30)
  
  ellipse(671 ,266,30)
  
  ellipse(665 ,258,30)
  
  ellipse(662 ,255,30)
  
  ellipse(620 ,228,30)
  
  ellipse(604 ,220,30)
  
  ellipse(596 ,215,30)
  
  ellipse(269 ,279,30)
  
  ellipse(142 ,372,30)
  
  ellipse(128 ,401,30)
  
  ellipse(132 ,413,30)
  
  ellipse(274 ,395,30)
  
  ellipse(363 ,383,30)
  
  ellipse(115 ,389,30)
  
  ellipse(123 ,382,30)
  
  ellipse(217 ,361,30)
  
  ellipse(153 ,356,30)
  
  ellipse(151 ,303,30)
  
  ellipse(96 ,354,30)
  
  ellipse(127 ,328,30)
  
  ellipse(116 ,377,30)
  
  ellipse(136 ,333,30)
  
  ellipse(111 ,364,30)
  
  ellipse(117 ,335,30)
  
  ellipse(90 ,388,30)
  
  ellipse(91 ,442,30)
  
  ellipse(115 ,393,30)
  
  ellipse(147 ,393,30)
  
  ellipse(106 ,423,30)
  
  ellipse(102 ,398,30)
  
  ellipse(160 ,435,30)
  
  ellipse(153 ,440,30)
  
  ellipse(152 ,416,30)
  
  ellipse(146 ,421,30)
  
  ellipse(133 ,433,30)
  
  ellipse(125 ,435,30)
  
  ellipse(126 ,438,30)
  
  ellipse(190 ,399,30)
  
  ellipse(203 ,387,30)
  
  ellipse(177 ,384,30)
  
  ellipse(181 ,382,30)
  
  ellipse(185 ,371,30)
  
  ellipse(181 ,350,30)
  
  ellipse(162 ,310,30)
  
  ellipse(106 ,300,30)
  
  ellipse(147 ,271,30)
  
  ellipse(152 ,269,30)
  
  ellipse(123 ,294,30)
  
  ellipse(146 ,307,30)
  
  ellipse(162 ,292,30)
  
  ellipse(177 ,287,30)
  
  ellipse(178 ,316,30)
  
  ellipse(212 ,322,30)
  
  ellipse(130 ,351,30)
  
  ellipse(160 ,326,30)
  
  ellipse(182 ,268,30)
  
  ellipse(346 ,285,30)
  
  ellipse(322 ,263,30)
  
  ellipse(229 ,257,30)
  
  ellipse(213 ,267,30)
  
  ellipse(293 ,254,30)
  
  ellipse(191 ,282,30)
  
  ellipse(226 ,247,30)
  
  ellipse(255 ,219,30)
  
  ellipse(172 ,248,30)
  
  ellipse(173 ,249,30)
  
  ellipse(213 ,232,30)
  
  ellipse(174 ,247,30)
  
  ellipse(126 ,273,30)
  
  ellipse(127 ,266,30)
  
  ellipse(261 ,171,30)
  
  ellipse(252 ,188,30)
  
  ellipse(216 ,220,30)
  
  ellipse(189 ,241,30)
  
  ellipse(247 ,202,30)
  
  ellipse(213 ,208),30
  
  ellipse(210 ,211,30)
  
  ellipse(241 ,198,30)
  
  ellipse(329 ,183,30)
  
  ellipse(308 ,184,30)
  
  ellipse(281 ,194,30)
  
  ellipse(274 ,195,30)
  
  ellipse(262 ,220,30)
  
  ellipse(315 ,199,30)
  
  ellipse(352 ,190,30)
  
  ellipse(369 ,177,30)
  
  ellipse(331 ,177,30)
  
  ellipse(373 ,176,30)
  
  ellipse(403 ,178,30)
  
  ellipse(429 ,178,30)
  
  ellipse(441 ,180,30)
  
  ellipse(465 ,182,30)
  
  ellipse(477 ,186,30)
  
  ellipse(494 ,191,30)
  
  ellipse(510 ,198,30)
  
  ellipse(520 ,200,30)
  
  ellipse(547 ,209,30)
  
  ellipse(557 ,211,30)
  
  ellipse(569 ,222,30)
  
  ellipse(581 ,230,30)
  
  ellipse(587 ,237,30)
  
  ellipse(595 ,246,30)
  
  ellipse(522 ,463,30)
  
  ellipse(537 ,459,30)
  
  ellipse(579 ,463,30)
  
  ellipse(574 ,457,30)
  
  ellipse(573 ,456,30)
  
  ellipse(632 ,459,30)
  
  ellipse(623 ,459,30)
  
  ellipse(613 ,457,30)
  
  ellipse(652 ,424,30)
  
  ellipse(680 ,381,30)
  
  ellipse(669 ,364,30)
  
  ellipse(666 ,413,30)
  
  ellipse(612 ,386,30)
  
  ellipse(537 ,361,30)
  
  ellipse(298 ,355,30)
  
  ellipse(300 ,355,30)
  
  ellipse(390 ,356,30)
  
  ellipse(153 ,328,30)
  
  ellipse(351 ,308,30)
  
  ellipse(315 ,301,30)
  
  ellipse(278 ,289,30)
  
  ellipse(414 ,259,30)
  
  ellipse(341 ,274,30)
  
  ellipse(538 ,279,30)
  
  ellipse(435 ,310,30)
  
  ellipse(470 ,321,30)
  
  ellipse(357 ,325,30)
  
  ellipse(463 ,317,30)
  
  ellipse(328 ,332,30)
  
  ellipse(409 ,347,30)
  
  ellipse(261 ,394)
  
  ellipse(246 ,397,30)
  
  ellipse(188 ,411,30)
  
  ellipse(180 ,427,30)
  
  ellipse(186 ,439,30)
  
  ellipse(201 ,435,30)
  
  ellipse(213 ,438,30)
  
  ellipse(185 ,443,30)
  
  ellipse(181 ,446,30)
  
  ellipse(252 ,444,30)
  
  ellipse(291 ,434),30
  
  ellipse(327 ,439,30)
  
  ellipse(292 ,435,30)
  
  ellipse(227 ,421,30)
  
  ellipse(334 ,384,30)
  
  ellipse(316 ,384,30)
  
  ellipse(237 ,389,30)
  
  ellipse(179 ,391,30)
  
  ellipse(254 ,341,30)
  
  ellipse(252 ,324)
  
  ellipse(254 ,299,30)
  
  ellipse(297 ,247,30)
  
  ellipse(209 ,277,30)
  
  ellipse(194 ,297,30)
  
  ellipse(203 ,302,30)
  
  ellipse(234 ,296,30)
  
  ellipse(235 ,290,30)
  
  ellipse(214 ,301,30)
  
  ellipse(198 ,346,30)
  
  ellipse(184 ,345,30)
  
  ellipse(212 ,419,30)
  
  ellipse(210 ,416,30)
  
  ellipse(260 ,399,30)
  
  ellipse(292 ,405,30)
  
  ellipse(253 ,405,30)
  
  ellipse(248 ,410,30)
  
  ellipse(290 ,416,30)
  
  ellipse(308 ,411,30)
  
  ellipse(321 ,407,30)
  
  ellipse(375 ,409,30)
  
  ellipse(324 ,399,30)
  
  ellipse(325 ,400,30)
  
  ellipse(381 ,406,30)
  
  ellipse(390 ,403,30)
  
  ellipse(469 ,358,30)
  
  ellipse(498 ,352,30)
  
  ellipse(519 ,354,30)
  
  ellipse(567 ,368,30)
  
  ellipse(510 ,392,30)
  
  ellipse(583 ,393,30)
  
  ellipse(627 ,395,30)
  
  ellipse(644 ,397,30)
  
  ellipse(644 ,367,30)
  
  ellipse(637 ,341,30)
  
  ellipse(630 ,320,30)
  
  ellipse(622 ,309,30)
  
  ellipse(600 ,276,30)
  
  ellipse(565 ,254,30)
  
  ellipse(545 ,234,30)
  
  ellipse(523 ,221,30)
  
  ellipse(498 ,217,30)
  
  ellipse(452 ,215,30)
  
  ellipse(416 ,209,30)
  
  ellipse(396 ,208,30)
  
  ellipse(371 ,210,30)
  
  ellipse(329 ,221,30)
  
  ellipse(308 ,227,30)
  
  ellipse(349 ,266,30)
  
  ellipse(280 ,300,30)
  
  ellipse(283 ,321,30)
  
  ellipse(388 ,352,30)
  
  ellipse(430 ,363,30)
  
  ellipse(442 ,367,30)
  
  ellipse(442 ,367,30)
  
  ellipse(385 ,359,30)
  
  ellipse(356 ,269,30)
  
  ellipse(413 ,293,30)
  
  ellipse(396 ,298,30)
  
  ellipse(390 ,299,30)
  
  ellipse(381 ,303,30)
  
  ellipse(376 ,263,30)
  
  ellipse(357 ,256,30)
  
  ellipse(340 ,247,30)
  
  ellipse(378 ,230,30)
  
  ellipse(412 ,237,30)
  
  ellipse(434 ,241,30)
  
  ellipse(494 ,235,30)
  
  ellipse(444 ,214,30)
  
  ellipse(476 ,204,30)
  
  ellipse(474 ,233,30)
  
  ellipse(460 ,236,30)
  
  ellipse(455 ,247,30)
  
  ellipse(424 ,267,30)
  
  ellipse(453 ,274,30)
  
  ellipse(464 ,276,30)
  
  ellipse(449 ,284,30)
  
  ellipse(464 ,295,30)
  
  ellipse(497 ,306,30)
  
  ellipse(497 ,343,30)
  
  ellipse(490 ,291,30)
  
  ellipse(495 ,269,30)
  
  ellipse(523 ,259,30)
  
  ellipse(430 ,334,30)
  
  ellipse(388 ,332,30)
  
  ellipse(364 ,342,30)
  
  ellipse(342 ,364,30)
  
  ellipse(332 ,365,30)
  
  ellipse(330 ,428,30)
  
  ellipse(433 ,400,30)
  
  ellipse(419 ,436,30)
  
  ellipse(456 ,422,30)
  
  ellipse(467 ,441,30)
  
  ellipse(539 ,343,30)
  
  ellipse(551 ,400,30)
  
  ellipse(551 ,318,30)
  
  ellipse(537 ,283,30)
  
  ellipse(525 ,287,30)
  
  ellipse(603 ,309,30)
  
  ellipse(250 ,358,30)
  
  ellipse(297 ,351,30)
  
  ellipse(280 ,359,30)
  
  ellipse(419 ,473,30)
  
  ellipse(345 ,461,30)
  
  ellipse(374 ,448,30)
  
  ellipse(415 ,449,30)
  
  ellipse(438 ,446,30)
  
  ellipse(406 ,394,30)
  
  ellipse(408 ,373,30)
  
  ellipse(467 ,388,30)
  
  ellipse(472 ,396,30)
  
  ellipse(498 ,374,30)
  
  ellipse(586 ,340,30)
  
  ellipse(591 ,363,30)
  
  ellipse(611 ,355,30)
  
  ellipse(610 ,340,30)
  
  ellipse(578 ,298,30)
  
  ellipse(561 ,280,30)
  
  ellipse(569 ,275,30)
  
  ellipse(351 ,224,30)
  
  ellipse(285 ,220,30)
  
  ellipse(302 ,277,30)
  
  ellipse(402 ,272,30)
  
  ellipse(392 ,249,30)
  
  ellipse(378 ,285,30)
  
  ellipse(410 ,320,30)
  
  ellipse(440 ,334,30)
  
  ellipse(509 ,323,30)
  
  ellipse(471 ,256,30)
  
  ellipse(568 ,312,30)
  
  ellipse(559 ,346,30)
  
  ellipse(531 ,302,30)
  
  ellipse(529 ,399,30)
  
  ellipse(532 ,387,30)
  
  ellipse(483 ,412,30)
  
  ellipse(498 ,436,30)
  
  ellipse(484 ,448,30)
  
  ellipse(576 ,406,30)
  
  ellipse(608 ,411,30)
  
  ellipse(354 ,398,30)
  
  ellipse(393 ,376,30)
  
  ellipse(419 ,405,30)
  
  ellipse(433 ,424,30)
  
  ellipse(328 ,410,30)
  
  ellipse(285 ,367,30)
  
  ellipse(308 ,324,30)
  
  ellipse(245 ,341,30)
  
  ellipse(217 ,342,30)
  
  ellipse(232 ,315,30)
  
  ellipse(266 ,255,30)
  
  ellipse(234 ,224 ,30)
  
  ellipse(616 ,296,30)
  
  ellipse(550 ,260,30)
  
  ellipse(505 ,234,30)
  
  ellipse(510 ,178,30)
  
  ellipse(529 ,319,30)
  
  ellipse(466 ,339,30)
  
  ellipse(349 ,418,30)
  
  ellipse(391 ,454,30)
  
  ellipse(636 ,418,30)
  
  ellipse(650 ,465,30)
  
  ellipse(705 ,418,30)
  
  ellipse(659 ,383,30)
  
  ellipse(737 ,380,30)
  
  ellipse( 291, 440,30)
  
  ellipse(292 ,451,30)
}

if(val > 70){


  fill(255, 201, 0 )
  stroke(255, 201, 0 )
  ellipse(400, 200, 600, 600);

  fill(18, 176, 40)
  stroke(18, 176, 40 )
  rect(-0, 700 ,800)
  
  
  
  tree();

  fill(5, 255, 0  );
  fill(5, 255, 0  );
    noStroke();
  
  ellipse(107,395,40)
  ellipse( 107,395,40)
  ellipse(117,465,40)    
  ellipse(106,460,40)
  ellipse(85 ,454,40)
  ellipse(77, 441,40)
  ellipse(74 ,425,40)
  ellipse(71 ,410,40)
  ellipse(67 ,395,40)
  ellipse(71 ,376,40)
  ellipse(72 ,366,40)
  ellipse(78 ,352,40)
  ellipse( 88 ,323,40)
  ellipse(98 ,306,40)
  ellipse( 112 ,287,40)
  ellipse(144 ,262,40)
  ellipse(180 ,223,40)
  ellipse( 159 ,231,40)
  ellipse(120 ,245,40)
  ellipse(105 ,256,40)
  ellipse(129 ,244,40)
  ellipse( 156 ,211 ,40)
  ellipse(200 ,190 ,40)
  ellipse(234 ,182,40)
  ellipse(252 ,176,40)  
  ellipse(286 ,166,40)
  ellipse(319 ,159,40)
  ellipse(358 ,153,40)
  ellipse(387 ,152,40)
  ellipse(410 ,152,40)
  ellipse(437 ,153,40)
  ellipse(460 ,156,40)
  ellipse(497 ,163,40)
  ellipse(500 ,163,40)
  ellipse(532 ,166,40)
  ellipse(540 ,174,40)
  ellipse(555 ,179,40)
  ellipse(580 ,186,40)
  ellipse(590 ,193,40)
  ellipse(622 ,217,40)
  ellipse(647 ,237,40)
  ellipse(660 ,268,40)
  ellipse(672 ,282,40)
  ellipse(686 ,303,40)
  ellipse(699 ,334,40)
  ellipse(705 ,352,40)
  ellipse(710 ,366,40)
  ellipse(706 ,392,40)
  ellipse(700 ,436,40)
  ellipse(692 ,458,40)
  ellipse(632 ,442,40)
  ellipse(617 ,436,40)
  ellipse(600 ,429,40)
  ellipse(582 ,428,40)
  ellipse(547 ,431,40)
  ellipse(519 ,429,40)
  ellipse(498 ,427,40)
  ellipse(469 ,427,40)
  ellipse(400 ,432,40)
  ellipse(371 ,434,30)
  ellipse( 354 ,438,40)
  ellipse(324 ,436,40)
  ellipse(275 ,436,40)
  ellipse(257 ,440,40)
  ellipse(221 ,444,40)
  ellipse(169 ,458,40)
  ellipse(144 ,461,40)
  ellipse(123 ,466,40)
  ellipse(174 ,462,40)
  ellipse(227 ,453,40)
  ellipse(253 ,453,40)
  ellipse(311 ,468,40)
  ellipse(337 ,477,40)
  ellipse(353 ,484,40)
  ellipse(370 ,486,40)
  ellipse(390 ,478,40)
  ellipse(420 ,468,40)
  ellipse(456 ,466,40)
  ellipse(469 ,465,40)
  ellipse(494 ,470,40)
  ellipse(541 ,475,40)
  ellipse(554 ,480,40)
  ellipse(592 ,485,40)    
  ellipse(597 ,486,40)
  ellipse(625 ,482,40)
  ellipse(631 ,477,40)
  ellipse(671 ,472,40)
  ellipse(682 ,464,40)
  ellipse(695 ,460,40)   
  ellipse(711 ,448,40)
  ellipse(713 ,446,40)   
  ellipse(719 ,435,40)
  ellipse(727 ,419,40)
  ellipse(726 ,398,40)
  ellipse(726 ,388,40)
  ellipse(725 ,368,40)
  ellipse(724 ,365,40)
  ellipse(723 ,353,40)
  ellipse(715 ,325,40)
  ellipse(708 ,315,40)
  ellipse(697 ,296,40)
  ellipse(691 ,286,40)
  ellipse(671 ,266,40)
  ellipse(665 ,258,40)
  ellipse(662 ,255,40)
  ellipse(620 ,228,40)
  ellipse(604 ,220,40)
  ellipse(596 ,215,40)
  ellipse(269 ,279,40)
  ellipse(142 ,372,40)
  ellipse(128 ,401,40)
  ellipse(132 ,413,40)
  ellipse(274 ,395,40)
  ellipse(363 ,383,40)
  ellipse(115 ,389,40)
  ellipse(123 ,382,40)
  ellipse(217 ,361,40)
  ellipse(153 ,356,40)
  ellipse(151 ,303,40)
  ellipse(96 ,354,40)
  ellipse(127 ,328,40)
  ellipse(116 ,377,40)
  ellipse(136 ,333,40)
  ellipse(111 ,364,40)
  ellipse(117 ,335,40)
  ellipse(90 ,388,40)
  ellipse(91 ,442,40)
  ellipse(115 ,393,40)
  ellipse(147 ,393,40)
  ellipse(106 ,423,40)
  ellipse(102 ,398,40)
  ellipse(160 ,435,40)
  ellipse(153 ,440,40)
  ellipse(152 ,416,40)
  ellipse(146 ,421,40)
  ellipse(133 ,433,40)
  ellipse(125 ,435,40)
  ellipse(126 ,438,40)
  ellipse(190 ,399,40)
  ellipse(203 ,387,40)
  ellipse(177 ,384,40)
  ellipse(181 ,382,40)
  ellipse(185 ,371,40)
  ellipse(181 ,350,40)
  ellipse(162 ,310,40)
  ellipse(106 ,300,40)
  ellipse(147 ,271,40)
  ellipse(152 ,269,40)
  ellipse(123 ,294,40)
  ellipse(146 ,307,40)
  ellipse(162 ,292,40)
  ellipse(177 ,287,40)
  ellipse(178 ,316,40)
  ellipse(212 ,322,40)
  ellipse(130 ,351,40)
  ellipse(160 ,326,40)
  ellipse(182 ,268,40)
  ellipse(346 ,285,40)
  ellipse(322 ,263,40)
  ellipse(229 ,257,40)
  ellipse(213 ,267,40)
  ellipse(293 ,254,40)
  ellipse(191 ,282,40)
  ellipse(226 ,247,40)
  ellipse(255 ,219,40)
  ellipse(172 ,248,40)
  ellipse(173 ,249,40)
  ellipse(213 ,232,40)
  ellipse(174 ,247,40)
  ellipse(126 ,273,40)
  ellipse(127 ,266,40)
  ellipse(261 ,171,40)
  ellipse(252 ,188,40)
  ellipse(216 ,220,40)
  ellipse(189 ,241,40)
  ellipse(247 ,202,40)
  ellipse(213 ,208,40)
  ellipse(210 ,211,40)
  ellipse(241 ,198,40)
  ellipse(329 ,183,40)
  ellipse(308 ,184,40)
  ellipse(281 ,194,40)
  ellipse(274 ,195,40)
  ellipse(262 ,220,40)
  ellipse(315 ,199,40)
  ellipse(352 ,190,40)
  ellipse(369 ,177,40)
  ellipse(331 ,177,40)
  ellipse(373 ,176,40)
  ellipse(403 ,178,40)
  ellipse(429 ,178,40)
  ellipse(441 ,180,40)
  ellipse(465 ,182,40)
  ellipse(477 ,186,40)
  ellipse(494 ,191,40)
  ellipse(510 ,198,40)
  ellipse(520 ,200,40)
  ellipse(547 ,209,40)
  ellipse(557 ,211,40)
  ellipse(569 ,222,40)
  ellipse(581 ,230,40)
  ellipse(587 ,237,40)
  ellipse(595 ,246,40)
  ellipse(522 ,463,40)
  ellipse(537 ,459,40)
  ellipse(579 ,463,40)
  ellipse(574 ,457,40)
  ellipse(573 ,456,40)
  ellipse(632 ,459,40)
  ellipse(623 ,459,40)
  ellipse(613 ,457,40)
  ellipse(652 ,424,40)
  ellipse(680 ,381,40)
  ellipse(669 ,364,40)
  ellipse(666 ,413,40)
  ellipse(612 ,386,40)
  ellipse(537 ,361,40)
  ellipse(298 ,355,40)
  ellipse(300 ,355,40)
  ellipse(390 ,356,40)
  ellipse(153 ,328,40)
  ellipse(351 ,308,40)
  ellipse(315 ,301,40)
  ellipse(278 ,289,40)
  ellipse(414 ,259,40)
  ellipse(341 ,274,40)
  ellipse(538 ,279,40)
  ellipse(435 ,310,40)
  ellipse(470 ,321,40)
  ellipse(357 ,325,40)
  ellipse(463 ,317,40)
  ellipse(328 ,332,40)
  ellipse(409 ,347,30)
  ellipse(261 ,394,40)
  ellipse(246 ,397,40)
  ellipse(188 ,411,40)
  ellipse(180 ,427,40)
  ellipse(186 ,439,40)
  ellipse(201 ,435,40)
  ellipse(213 ,438,40)
  ellipse(185 ,443,40)
  ellipse(181 ,446,40)
  ellipse(252 ,444,40)
  ellipse(291 ,434,40)
  ellipse(327 ,439,40)
  ellipse(292 ,435,40)
  ellipse(227 ,421,40)
  ellipse(334 ,384,40)
  ellipse(316 ,384,40)
  ellipse(237 ,389,40)
  ellipse(179 ,391,40)
  ellipse(254 ,341,40)
  ellipse(252 ,324,40)
  ellipse(254 ,299,40)
  ellipse(297 ,247,40)
  ellipse(209 ,277,40)
  ellipse(194 ,297,40)
  ellipse(203 ,302,40)
  ellipse(234 ,296,40)
  ellipse(235 ,290,40)
  ellipse(214 ,301,40)
  ellipse(198 ,346,40)
  ellipse(184 ,345,40)
  ellipse(212 ,419,40)
  ellipse(210 ,416,40)
  ellipse(260 ,399,40)
  ellipse(292 ,405,40)
  ellipse(253 ,405,40)
  ellipse(248 ,410,40)
  ellipse(290 ,416,40)
  ellipse(308 ,411,40)
  ellipse(321 ,407,40)
  ellipse(375 ,409,40)
  ellipse(324 ,399,40)
  ellipse(325 ,400,40)
  ellipse(381 ,406,40)
  ellipse(390 ,403,40)
  ellipse(469 ,358,40)
  ellipse(498 ,352,40)
  ellipse(519 ,354,40)
  ellipse(567 ,368,40)
  ellipse(510 ,392,40)
  ellipse(583 ,393,40)
  ellipse(627 ,395,40)
  ellipse(644 ,397,40)
  ellipse(644 ,367,40)
  ellipse(637 ,341,40)
  ellipse(630 ,320,40)
  ellipse(622 ,309,40)
  ellipse(600 ,276,40)
  ellipse(565 ,254,40)
  ellipse(545 ,234,40)
  ellipse(523 ,221,40)
  ellipse(498 ,217,40)
  ellipse(452 ,215,40)
  ellipse(416 ,209,40)
  ellipse(396 ,208,40)
  ellipse(371 ,210,40)
  ellipse(329 ,221,40)
  ellipse(308 ,227,40)
  ellipse(349 ,266,40)
  ellipse(280 ,300,40)
  ellipse(283 ,321,40)
  ellipse(388 ,352,40)
  ellipse(430 ,363,40)
  ellipse(442 ,367,40)
  ellipse(442 ,367,40)
  ellipse(385 ,359,40)
  ellipse(356 ,269,40)
  ellipse(413 ,293,40)
  ellipse(396 ,298,40)
  ellipse(390 ,299,40)
  ellipse(381 ,303,40)
  ellipse(376 ,263,40)
  ellipse(357 ,256,40)
  ellipse(340 ,247,40)
  ellipse(378 ,230,40)
  ellipse(412 ,237,40)
  ellipse(434 ,241,40)
  ellipse(494 ,235,40)
  ellipse(444 ,214,40)
  ellipse(476 ,204,40)
  ellipse(474 ,233,40)
  ellipse(460 ,236,40)
  ellipse(455 ,247,40)
  ellipse(424 ,267,40)
  ellipse(453 ,274,40)
  ellipse(464 ,276,40)
  ellipse(449 ,284,40)
  ellipse(464 ,295,40)
  ellipse(497 ,306,40)
  ellipse(497 ,343,40)
  ellipse(490 ,291,40)
  ellipse(495 ,269,40)
  ellipse(523 ,259,40)
  ellipse(430 ,334,40)
  ellipse(388 ,332,40)
  ellipse(364 ,342,40)
  ellipse(342 ,364,40)
  ellipse(332 ,365,40)
  ellipse(330 ,428,40)
  ellipse(433 ,400,40)
  ellipse(419 ,436,40)
  ellipse(456 ,422,40)
  ellipse(467 ,441,40)
  ellipse(539 ,343,40)
  ellipse(551 ,400,40)
  ellipse(551 ,318,40)
  ellipse(537 ,283,40)
  ellipse(525 ,287,40)
  ellipse(603 ,309,40)
  ellipse(250 ,358,40)
  ellipse(297 ,351,40)
  ellipse(280 ,359,40)
  ellipse(419 ,473,40)
  ellipse(345 ,461,40)
  ellipse(374 ,448,40)
  ellipse(415 ,449,40)
  ellipse(438 ,446,40)
  ellipse(406 ,394,40)
  ellipse(408 ,373,40)
  ellipse(467 ,388,40)
  ellipse(472 ,396,40)
  ellipse(498 ,374,40)
  ellipse(586 ,340,40)
  ellipse(591 ,363,40)
  ellipse(611 ,355,40)
  ellipse(610 ,340,40)
  ellipse(578 ,298,40)
  ellipse(561 ,280,40)
  ellipse(569 ,275,40)
  ellipse(351 ,224,40)
  ellipse(285 ,220,40)
  ellipse(302 ,277,40)
  ellipse(402 ,272,40)
  ellipse(392 ,249,40)
  ellipse(378 ,285,40)
  ellipse(410 ,320,40)
  ellipse(440 ,334,40)
  ellipse(509 ,323,40)
  ellipse(471 ,256,40)
  ellipse(568 ,312,40)
  ellipse(559 ,346,40)
  ellipse(531 ,302,40)
  ellipse(529 ,399,40)
  ellipse(532 ,387,40)
  ellipse(483 ,412,40)
  ellipse(498 ,436,40)
  ellipse(484 ,448,40)
  ellipse(576 ,406,40)
  ellipse(608 ,411,40)
  ellipse(354 ,398,40)
  ellipse(393 ,376,40)
  ellipse(419 ,405,40)
  ellipse(433 ,424,40)
  ellipse(328 ,410,40)
  ellipse(285 ,367,40)
  ellipse(308 ,324,40)
  ellipse(245 ,341,40)
  ellipse(217 ,342,40)
  ellipse(232 ,315,40)
  ellipse(266 ,255,40)
  ellipse(234 ,224 ,40)
  ellipse(616 ,296,40)
  ellipse(550 ,260,40)
  ellipse(505 ,234,40)
  ellipse(510 ,178,40)
  ellipse(529 ,319,40)
  ellipse(466 ,339,40)
  ellipse(349 ,418,40)
  ellipse(391 ,454,40)
  ellipse(636 ,418,40)
  ellipse(650 ,465,40)
  ellipse(705 ,418,40)
  ellipse(659 ,383,40)
  ellipse(737 ,380,40)
  ellipse( 291, 440,40)
  ellipse(292 ,451,40)
  ellipse(646,294 ,40)
  ellipse(679 ,328,40)
  ellipse(658 ,337,40)
  ellipse(684 ,317,40)
  ellipse(671 ,307,40)
  ellipse(705 ,364,40)
  ellipse(624 ,264,40)
}
if(val > 170){


  fill(255, 201, 0 )
  stroke(255, 201, 0 )
  ellipse(400, 200, 600, 600);

  fill(18, 176, 40)
  stroke(18, 176, 40 )
  rect(-0, 700 ,800)
  
  
  
  tree();

  fill(183, 83, 4 );
  
    noStroke();
  
  ellipse(107,395,40)
  ellipse( 107,395,40)
  ellipse(117,465,40)    
  ellipse(106,460,40)
  ellipse(85 ,454,40)
  ellipse(77, 441,40)
  ellipse(74 ,425,40)
  ellipse(71 ,410,40)
  ellipse(67 ,395,40)
  ellipse(71 ,376,40)
  ellipse(72 ,366,40)
  ellipse(78 ,352,40)
  ellipse( 88 ,323,40)
  ellipse(98 ,306,40)
  ellipse( 112 ,287,40)
  ellipse(144 ,262,40)
  ellipse(180 ,223,40)
  ellipse( 159 ,231,40)
  ellipse(120 ,245,40)
  ellipse(105 ,256,40)
  ellipse(129 ,244,40)
  ellipse( 156 ,211 ,40)
  ellipse(200 ,190 ,40)
  ellipse(234 ,182,40)
  ellipse(252 ,176,40)  
  ellipse(286 ,166,40)
  ellipse(319 ,159,40)
  ellipse(358 ,153,40)
  ellipse(387 ,152,40)
  ellipse(410 ,152,40)
  ellipse(437 ,153,40)
  ellipse(460 ,156,40)
  ellipse(497 ,163,40)
  ellipse(500 ,163,40)
  ellipse(532 ,166,40)
  ellipse(540 ,174,40)
  ellipse(555 ,179,40)
  ellipse(580 ,186,40)
  ellipse(590 ,193,40)
  ellipse(622 ,217,40)
  ellipse(647 ,237,40)
  ellipse(660 ,268,40)
  ellipse(672 ,282,40)
  ellipse(686 ,303,40)
  ellipse(699 ,334,40)
  ellipse(705 ,352,40)
  ellipse(710 ,366,40)
  ellipse(706 ,392,40)
  ellipse(700 ,436,40)
  ellipse(692 ,458,40)
  ellipse(632 ,442,40)
  ellipse(617 ,436,40)
  ellipse(600 ,429,40)
  ellipse(582 ,428,40)
  ellipse(547 ,431,40)
  ellipse(519 ,429,40)
  ellipse(498 ,427,40)
  ellipse(469 ,427,40)
  ellipse(400 ,432,40)
  ellipse(371 ,434,30)
  ellipse( 354 ,438,40)
  ellipse(324 ,436,40)
  ellipse(275 ,436,40)
  ellipse(257 ,440,40)
  ellipse(221 ,444,40)
  ellipse(169 ,458,40)
  ellipse(144 ,461,40)
  ellipse(123 ,466,40)
  ellipse(174 ,462,40)
  ellipse(227 ,453,40)
  ellipse(253 ,453,40)
  ellipse(311 ,468,40)
  ellipse(337 ,477,40)
  ellipse(353 ,484,40)
  ellipse(370 ,486,40)
  ellipse(390 ,478,40)
  ellipse(420 ,468,40)
  ellipse(456 ,466,40)
  ellipse(469 ,465,40)
  ellipse(494 ,470,40)
  ellipse(541 ,475,40)
  ellipse(554 ,480,40)
  ellipse(592 ,485,40)    
  ellipse(597 ,486,40)
  ellipse(625 ,482,40)
  ellipse(631 ,477,40)
  ellipse(671 ,472,40)
  ellipse(682 ,464,40)
  ellipse(695 ,460,40)   
  ellipse(711 ,448,40)
  ellipse(713 ,446,40)   
  ellipse(719 ,435,40)
  ellipse(727 ,419,40)
  ellipse(726 ,398,40)
  ellipse(726 ,388,40)
  ellipse(725 ,368,40)
  ellipse(724 ,365,40)
  ellipse(723 ,353,40)
  ellipse(715 ,325,40)
  ellipse(708 ,315,40)
  ellipse(697 ,296,40)
  ellipse(691 ,286,40)
  ellipse(671 ,266,40)
  ellipse(665 ,258,40)
  ellipse(662 ,255,40)
  ellipse(620 ,228,40)
  ellipse(604 ,220,40)
  ellipse(596 ,215,40)
  ellipse(269 ,279,40)
  ellipse(142 ,372,40)
  ellipse(128 ,401,40)
  ellipse(132 ,413,40)
  ellipse(274 ,395,40)
  ellipse(363 ,383,40)
  ellipse(115 ,389,40)
  ellipse(123 ,382,40)
  ellipse(217 ,361,40)
  ellipse(153 ,356,40)
  ellipse(151 ,303,40)
  ellipse(96 ,354,40)
  ellipse(127 ,328,40)
  ellipse(116 ,377,40)
  ellipse(136 ,333,40)
  ellipse(111 ,364,40)
  ellipse(117 ,335,40)
  ellipse(90 ,388,40)
  ellipse(91 ,442,40)
  ellipse(115 ,393,40)
  ellipse(147 ,393,40)
  ellipse(106 ,423,40)
  ellipse(102 ,398,40)
  ellipse(160 ,435,40)
  ellipse(153 ,440,40)
  ellipse(152 ,416,40)
  ellipse(146 ,421,40)
  ellipse(133 ,433,40)
  ellipse(125 ,435,40)
  ellipse(126 ,438,40)
  ellipse(190 ,399,40)
  ellipse(203 ,387,40)
  ellipse(177 ,384,40)
  ellipse(181 ,382,40)
  ellipse(185 ,371,40)
  ellipse(181 ,350,40)
  ellipse(162 ,310,40)
  ellipse(106 ,300,40)
  ellipse(147 ,271,40)
  ellipse(152 ,269,40)
  ellipse(123 ,294,40)
  ellipse(146 ,307,40)
  ellipse(162 ,292,40)
  ellipse(177 ,287,40)
  ellipse(178 ,316,40)
  ellipse(212 ,322,40)
  ellipse(130 ,351,40)
  ellipse(160 ,326,40)
  ellipse(182 ,268,40)
  ellipse(346 ,285,40)
  ellipse(322 ,263,40)
  ellipse(229 ,257,40)
  ellipse(213 ,267,40)
  ellipse(293 ,254,40)
  ellipse(191 ,282,40)
  ellipse(226 ,247,40)
  ellipse(255 ,219,40)
  ellipse(172 ,248,40)
  ellipse(173 ,249,40)
  ellipse(213 ,232,40)
  ellipse(174 ,247,40)
  ellipse(126 ,273,40)
  ellipse(127 ,266,40)
  ellipse(261 ,171,40)
  ellipse(252 ,188,40)
  ellipse(216 ,220,40)
  ellipse(189 ,241,40)
  ellipse(247 ,202,40)
  ellipse(213 ,208,40)
  ellipse(210 ,211,40)
  ellipse(241 ,198,40)
  ellipse(329 ,183,40)
  ellipse(308 ,184,40)
  ellipse(281 ,194,40)
  ellipse(274 ,195,40)
  ellipse(262 ,220,40)
  ellipse(315 ,199,40)
  ellipse(352 ,190,40)
  ellipse(369 ,177,40)
  ellipse(331 ,177,40)
  ellipse(373 ,176,40)
  ellipse(403 ,178,40)
  ellipse(429 ,178,40)
  ellipse(441 ,180,40)
  ellipse(465 ,182,40)
  ellipse(477 ,186,40)
  ellipse(494 ,191,40)
  ellipse(510 ,198,40)
  ellipse(520 ,200,40)
  ellipse(547 ,209,40)
  ellipse(557 ,211,40)
  ellipse(569 ,222,40)
  ellipse(581 ,230,40)
  ellipse(587 ,237,40)
  ellipse(595 ,246,40)
  ellipse(522 ,463,40)
  ellipse(537 ,459,40)
  ellipse(579 ,463,40)
  ellipse(574 ,457,40)
  ellipse(573 ,456,40)
  ellipse(632 ,459,40)
  ellipse(623 ,459,40)
  ellipse(613 ,457,40)
  ellipse(652 ,424,40)
  ellipse(680 ,381,40)
  ellipse(669 ,364,40)
  ellipse(666 ,413,40)
  ellipse(612 ,386,40)
  ellipse(537 ,361,40)
  ellipse(298 ,355,40)
  ellipse(300 ,355,40)
  ellipse(390 ,356,40)
  ellipse(153 ,328,40)
  ellipse(351 ,308,40)
  ellipse(315 ,301,40)
  ellipse(278 ,289,40)
  ellipse(414 ,259,40)
  ellipse(341 ,274,40)
  ellipse(538 ,279,40)
  ellipse(435 ,310,40)
  ellipse(470 ,321,40)
  ellipse(357 ,325,40)
  ellipse(463 ,317,40)
  ellipse(328 ,332,40)
  ellipse(409 ,347,30)
  ellipse(261 ,394,40)
  ellipse(246 ,397,40)
  ellipse(188 ,411,40)
  ellipse(180 ,427,40)
  ellipse(186 ,439,40)
  ellipse(201 ,435,40)
  ellipse(213 ,438,40)
  ellipse(185 ,443,40)
  ellipse(181 ,446,40)
  ellipse(252 ,444,40)
  ellipse(291 ,434,40)
  ellipse(327 ,439,40)
  ellipse(292 ,435,40)
  ellipse(227 ,421,40)
  ellipse(334 ,384,40)
  ellipse(316 ,384,40)
  ellipse(237 ,389,40)
  ellipse(179 ,391,40)
  ellipse(254 ,341,40)
  ellipse(252 ,324,40)
  ellipse(254 ,299,40)
  ellipse(297 ,247,40)
  ellipse(209 ,277,40)
  ellipse(194 ,297,40)
  ellipse(203 ,302,40)
  ellipse(234 ,296,40)
  ellipse(235 ,290,40)
  ellipse(214 ,301,40)
  ellipse(198 ,346,40)
  ellipse(184 ,345,40)
  ellipse(212 ,419,40)
  ellipse(210 ,416,40)
  ellipse(260 ,399,40)
  ellipse(292 ,405,40)
  ellipse(253 ,405,40)
  ellipse(248 ,410,40)
  ellipse(290 ,416,40)
  ellipse(308 ,411,40)
  ellipse(321 ,407,40)
  ellipse(375 ,409,40)
  ellipse(324 ,399,40)
  ellipse(325 ,400,40)
  ellipse(381 ,406,40)
  ellipse(390 ,403,40)
  ellipse(469 ,358,40)
  ellipse(498 ,352,40)
  ellipse(519 ,354,40)
  ellipse(567 ,368,40)
  ellipse(510 ,392,40)
  ellipse(583 ,393,40)
  ellipse(627 ,395,40)
  ellipse(644 ,397,40)
  ellipse(644 ,367,40)
  ellipse(637 ,341,40)
  ellipse(630 ,320,40)
  ellipse(622 ,309,40)
  ellipse(600 ,276,40)
  ellipse(565 ,254,40)
  ellipse(545 ,234,40)
  ellipse(523 ,221,40)
  ellipse(498 ,217,40)
  ellipse(452 ,215,40)
  ellipse(416 ,209,40)
  ellipse(396 ,208,40)
  ellipse(371 ,210,40)
  ellipse(329 ,221,40)
  ellipse(308 ,227,40)
  ellipse(349 ,266,40)
  ellipse(280 ,300,40)
  ellipse(283 ,321,40)
  ellipse(388 ,352,40)
  ellipse(430 ,363,40)
  ellipse(442 ,367,40)
  ellipse(442 ,367,40)
  ellipse(385 ,359,40)
  ellipse(356 ,269,40)
  ellipse(413 ,293,40)
  ellipse(396 ,298,40)
  ellipse(390 ,299,40)
  ellipse(381 ,303,40)
  ellipse(376 ,263,40)
  ellipse(357 ,256,40)
  ellipse(340 ,247,40)
  ellipse(378 ,230,40)
  ellipse(412 ,237,40)
  ellipse(434 ,241,40)
  ellipse(494 ,235,40)
  ellipse(444 ,214,40)
  ellipse(476 ,204,40)
  ellipse(474 ,233,40)
  ellipse(460 ,236,40)
  ellipse(455 ,247,40)
  ellipse(424 ,267,40)
  ellipse(453 ,274,40)
  ellipse(464 ,276,40)
  ellipse(449 ,284,40)
  ellipse(464 ,295,40)
  ellipse(497 ,306,40)
  ellipse(497 ,343,40)
  ellipse(490 ,291,40)
  ellipse(495 ,269,40)
  ellipse(523 ,259,40)
  ellipse(430 ,334,40)
  ellipse(388 ,332,40)
  ellipse(364 ,342,40)
  ellipse(342 ,364,40)
  ellipse(332 ,365,40)
  ellipse(330 ,428,40)
  ellipse(433 ,400,40)
  ellipse(419 ,436,40)
  ellipse(456 ,422,40)
  ellipse(467 ,441,40)
  ellipse(539 ,343,40)
  ellipse(551 ,400,40)
  ellipse(551 ,318,40)
  ellipse(537 ,283,40)
  ellipse(525 ,287,40)
  ellipse(603 ,309,40)
  ellipse(250 ,358,40)
  ellipse(297 ,351,40)
  ellipse(280 ,359,40)
  ellipse(419 ,473,40)
  ellipse(345 ,461,40)
  ellipse(374 ,448,40)
  ellipse(415 ,449,40)
  ellipse(438 ,446,40)
  ellipse(406 ,394,40)
  ellipse(408 ,373,40)
  ellipse(467 ,388,40)
  ellipse(472 ,396,40)
  ellipse(498 ,374,40)
  ellipse(586 ,340,40)
  ellipse(591 ,363,40)
  ellipse(611 ,355,40)
  ellipse(610 ,340,40)
  ellipse(578 ,298,40)
  ellipse(561 ,280,40)
  ellipse(569 ,275,40)
  ellipse(351 ,224,40)
  ellipse(285 ,220,40)
  ellipse(302 ,277,40)
  ellipse(402 ,272,40)
  ellipse(392 ,249,40)
  ellipse(378 ,285,40)
  ellipse(410 ,320,40)
  ellipse(440 ,334,40)
  ellipse(509 ,323,40)
  ellipse(471 ,256,40)
  ellipse(568 ,312,40)
  ellipse(559 ,346,40)
  ellipse(531 ,302,40)
  ellipse(529 ,399,40)
  ellipse(532 ,387,40)
  ellipse(483 ,412,40)
  ellipse(498 ,436,40)
  ellipse(484 ,448,40)
  ellipse(576 ,406,40)
  ellipse(608 ,411,40)
  ellipse(354 ,398,40)
  ellipse(393 ,376,40)
  ellipse(419 ,405,40)
  ellipse(433 ,424,40)
  ellipse(328 ,410,40)
  ellipse(285 ,367,40)
  ellipse(308 ,324,40)
  ellipse(245 ,341,40)
  ellipse(217 ,342,40)
  ellipse(232 ,315,40)
  ellipse(266 ,255,40)
  ellipse(234 ,224 ,40)
  ellipse(616 ,296,40)
  ellipse(550 ,260,40)
  ellipse(505 ,234,40)
  ellipse(510 ,178,40)
  ellipse(529 ,319,40)
  ellipse(466 ,339,40)
  ellipse(349 ,418,40)
  ellipse(391 ,454,40)
  ellipse(636 ,418,40)
  ellipse(650 ,465,40)
  ellipse(705 ,418,40)
  ellipse(659 ,383,40)
  ellipse(737 ,380,40)
  ellipse( 291, 440,40)
  ellipse(292 ,451,40)
  ellipse(646,294 ,40)
  ellipse(679 ,328,40)
  ellipse(658 ,337,40)
  ellipse(684 ,317,40)
  ellipse(671 ,307,40)
  ellipse(705 ,364,40)
  ellipse(624 ,264,40)
}
if(val > 240){
  
  fill(158, 229, 221 );
  
    noStroke();
  
  ellipse(107,395,40)
  ellipse( 107,395,40)
  ellipse(117,465,40)    
  ellipse(106,460,40)
  ellipse(85 ,454,40)
  ellipse(77, 441,40)
  ellipse(74 ,425,40)
  ellipse(71 ,410,40)
  ellipse(67 ,395,40)
  ellipse(71 ,376,40)
  ellipse(72 ,366,40)
  ellipse(78 ,352,40)
  ellipse( 88 ,323,40)
  ellipse(98 ,306,40)
  ellipse( 112 ,287,40)
  ellipse(144 ,262,40)
  ellipse(180 ,223,40)
  ellipse( 159 ,231,40)
  ellipse(120 ,245,40)
  ellipse(105 ,256,40)
  ellipse(129 ,244,40)
  ellipse( 156 ,211 ,40)
  ellipse(200 ,190 ,40)
  ellipse(234 ,182,40)
  ellipse(252 ,176,40)  
  ellipse(286 ,166,40)
  ellipse(319 ,159,40)
  ellipse(358 ,153,40)
  ellipse(387 ,152,40)
  ellipse(410 ,152,40)
  ellipse(437 ,153,40)
  ellipse(460 ,156,40)
  ellipse(497 ,163,40)
  ellipse(500 ,163,40)
  ellipse(532 ,166,40)
  ellipse(540 ,174,40)
  ellipse(555 ,179,40)
  ellipse(580 ,186,40)
  ellipse(590 ,193,40)
  ellipse(622 ,217,40)
  ellipse(647 ,237,40)
  ellipse(660 ,268,40)
  ellipse(672 ,282,40)
  ellipse(686 ,303,40)
  ellipse(699 ,334,40)
  ellipse(705 ,352,40)
  ellipse(710 ,366,40)
  ellipse(706 ,392,40)
  ellipse(700 ,436,40)
  ellipse(692 ,458,40)
  ellipse(632 ,442,40)
  ellipse(617 ,436,40)
  ellipse(600 ,429,40)
  ellipse(582 ,428,40)
  ellipse(547 ,431,40)
  ellipse(519 ,429,40)
  ellipse(498 ,427,40)
  ellipse(469 ,427,40)
  ellipse(400 ,432,40)
  ellipse(371 ,434,30)
  ellipse( 354 ,438,40)
  ellipse(324 ,436,40)
  ellipse(275 ,436,40)
  ellipse(257 ,440,40)
  ellipse(221 ,444,40)
  ellipse(169 ,458,40)
  ellipse(144 ,461,40)
  ellipse(123 ,466,40)
  ellipse(174 ,462,40)
  ellipse(227 ,453,40)
  ellipse(253 ,453,40)
  ellipse(311 ,468,40)
  ellipse(337 ,477,40)
  ellipse(353 ,484,40)
  ellipse(370 ,486,40)
  ellipse(390 ,478,40)
  ellipse(420 ,468,40)
  ellipse(456 ,466,40)
  ellipse(469 ,465,40)
  ellipse(494 ,470,40)
  ellipse(541 ,475,40)
  ellipse(554 ,480,40)
  ellipse(592 ,485,40)    
  ellipse(597 ,486,40)
  ellipse(625 ,482,40)
  ellipse(631 ,477,40)
  ellipse(671 ,472,40)
  ellipse(682 ,464,40)
  ellipse(695 ,460,40)   
  ellipse(711 ,448,40)
  ellipse(713 ,446,40)   
  ellipse(719 ,435,40)
  ellipse(727 ,419,40)
  ellipse(726 ,398,40)
  ellipse(726 ,388,40)
  ellipse(725 ,368,40)
  ellipse(724 ,365,40)
  ellipse(723 ,353,40)
  ellipse(715 ,325,40)
  ellipse(708 ,315,40)
  ellipse(697 ,296,40)
  ellipse(691 ,286,40)
  ellipse(671 ,266,40)
  ellipse(665 ,258,40)
  ellipse(662 ,255,40)
  ellipse(620 ,228,40)
  ellipse(604 ,220,40)
  ellipse(596 ,215,40)
  ellipse(269 ,279,40)
  ellipse(142 ,372,40)
  ellipse(128 ,401,40)
  ellipse(132 ,413,40)
  ellipse(274 ,395,40)
  ellipse(363 ,383,40)
  ellipse(115 ,389,40)
  ellipse(123 ,382,40)
  ellipse(217 ,361,40)
  ellipse(153 ,356,40)
  ellipse(151 ,303,40)
  ellipse(96 ,354,40)
  ellipse(127 ,328,40)
  ellipse(116 ,377,40)
  ellipse(136 ,333,40)
  ellipse(111 ,364,40)
  ellipse(117 ,335,40)
  ellipse(90 ,388,40)
  ellipse(91 ,442,40)
  ellipse(115 ,393,40)
  ellipse(147 ,393,40)
  ellipse(106 ,423,40)
  ellipse(102 ,398,40)
  ellipse(160 ,435,40)
  ellipse(153 ,440,40)
  ellipse(152 ,416,40)
  ellipse(146 ,421,40)
  ellipse(133 ,433,40)
  ellipse(125 ,435,40)
  ellipse(126 ,438,40)
  ellipse(190 ,399,40)
  ellipse(203 ,387,40)
  ellipse(177 ,384,40)
  ellipse(181 ,382,40)
  ellipse(185 ,371,40)
  ellipse(181 ,350,40)
  ellipse(162 ,310,40)
  ellipse(106 ,300,40)
  ellipse(147 ,271,40)
  ellipse(152 ,269,40)
  ellipse(123 ,294,40)
  ellipse(146 ,307,40)
  ellipse(162 ,292,40)
  ellipse(177 ,287,40)
  ellipse(178 ,316,40)
  ellipse(212 ,322,40)
  ellipse(130 ,351,40)
  ellipse(160 ,326,40)
  ellipse(182 ,268,40)
  ellipse(346 ,285,40)
  ellipse(322 ,263,40)
  ellipse(229 ,257,40)
  ellipse(213 ,267,40)
  ellipse(293 ,254,40)
  ellipse(191 ,282,40)
  ellipse(226 ,247,40)
  ellipse(255 ,219,40)
  ellipse(172 ,248,40)
  ellipse(173 ,249,40)
  ellipse(213 ,232,40)
  ellipse(174 ,247,40)
  ellipse(126 ,273,40)
  ellipse(127 ,266,40)
  ellipse(261 ,171,40)
  ellipse(252 ,188,40)
  ellipse(216 ,220,40)
  ellipse(189 ,241,40)
  ellipse(247 ,202,40)
  ellipse(213 ,208,40)
  ellipse(210 ,211,40)
  ellipse(241 ,198,40)
  ellipse(329 ,183,40)
  ellipse(308 ,184,40)
  ellipse(281 ,194,40)
  ellipse(274 ,195,40)
  ellipse(262 ,220,40)
  ellipse(315 ,199,40)
  ellipse(352 ,190,40)
  ellipse(369 ,177,40)
  ellipse(331 ,177,40)
  ellipse(373 ,176,40)
  ellipse(403 ,178,40)
  ellipse(429 ,178,40)
  ellipse(441 ,180,40)
  ellipse(465 ,182,40)
  ellipse(477 ,186,40)
  ellipse(494 ,191,40)
  ellipse(510 ,198,40)
  ellipse(520 ,200,40)
  ellipse(547 ,209,40)
  ellipse(557 ,211,40)
  ellipse(569 ,222,40)
  ellipse(581 ,230,40)
  ellipse(587 ,237,40)
  ellipse(595 ,246,40)
  ellipse(522 ,463,40)
  ellipse(537 ,459,40)
  ellipse(579 ,463,40)
  ellipse(574 ,457,40)
  ellipse(573 ,456,40)
  ellipse(632 ,459,40)
  ellipse(623 ,459,40)
  ellipse(613 ,457,40)
  ellipse(652 ,424,40)
  ellipse(680 ,381,40)
  ellipse(669 ,364,40)
  ellipse(666 ,413,40)
  ellipse(612 ,386,40)
  ellipse(537 ,361,40)
  ellipse(298 ,355,40)
  ellipse(300 ,355,40)
  ellipse(390 ,356,40)
  ellipse(153 ,328,40)
  ellipse(351 ,308,40)
  ellipse(315 ,301,40)
  ellipse(278 ,289,40)
  ellipse(414 ,259,40)
  ellipse(341 ,274,40)
  ellipse(538 ,279,40)
  ellipse(435 ,310,40)
  ellipse(470 ,321,40)
  ellipse(357 ,325,40)
  ellipse(463 ,317,40)
  ellipse(328 ,332,40)
  ellipse(409 ,347,30)
  ellipse(261 ,394,40)
  ellipse(246 ,397,40)
  ellipse(188 ,411,40)
  ellipse(180 ,427,40)
  ellipse(186 ,439,40)
  ellipse(201 ,435,40)
  ellipse(213 ,438,40)
  ellipse(185 ,443,40)
  ellipse(181 ,446,40)
  ellipse(252 ,444,40)
  ellipse(291 ,434,40)
  ellipse(327 ,439,40)
  ellipse(292 ,435,40)
  ellipse(227 ,421,40)
  ellipse(334 ,384,40)
  ellipse(316 ,384,40)
  ellipse(237 ,389,40)
  ellipse(179 ,391,40)
  ellipse(254 ,341,40)
  ellipse(252 ,324,40)
  ellipse(254 ,299,40)
  ellipse(297 ,247,40)
  ellipse(209 ,277,40)
  ellipse(194 ,297,40)
  ellipse(203 ,302,40)
  ellipse(234 ,296,40)
  ellipse(235 ,290,40)
  ellipse(214 ,301,40)
  ellipse(198 ,346,40)
  ellipse(184 ,345,40)
  ellipse(212 ,419,40)
  ellipse(210 ,416,40)
  ellipse(260 ,399,40)
  ellipse(292 ,405,40)
  ellipse(253 ,405,40)
  ellipse(248 ,410,40)
  ellipse(290 ,416,40)
  ellipse(308 ,411,40)
  ellipse(321 ,407,40)
  ellipse(375 ,409,40)
  ellipse(324 ,399,40)
  ellipse(325 ,400,40)
  ellipse(381 ,406,40)
  ellipse(390 ,403,40)
  ellipse(469 ,358,40)
  ellipse(498 ,352,40)
  ellipse(519 ,354,40)
  ellipse(567 ,368,40)
  ellipse(510 ,392,40)
  ellipse(583 ,393,40)
  ellipse(627 ,395,40)
  ellipse(644 ,397,40)
  ellipse(644 ,367,40)
  ellipse(637 ,341,40)
  ellipse(630 ,320,40)
  ellipse(622 ,309,40)
  ellipse(600 ,276,40)
  ellipse(565 ,254,40)
  ellipse(545 ,234,40)
  ellipse(523 ,221,40)
  ellipse(498 ,217,40)
  ellipse(452 ,215,40)
  ellipse(416 ,209,40)
  ellipse(396 ,208,40)
  ellipse(371 ,210,40)
  ellipse(329 ,221,40)
  ellipse(308 ,227,40)
  ellipse(349 ,266,40)
  ellipse(280 ,300,40)
  ellipse(283 ,321,40)
  ellipse(388 ,352,40)
  ellipse(430 ,363,40)
  ellipse(442 ,367,40)
  ellipse(442 ,367,40)
  ellipse(385 ,359,40)
  ellipse(356 ,269,40)
  ellipse(413 ,293,40)
  ellipse(396 ,298,40)
  ellipse(390 ,299,40)
  ellipse(381 ,303,40)
  ellipse(376 ,263,40)
  ellipse(357 ,256,40)
  ellipse(340 ,247,40)
  ellipse(378 ,230,40)
  ellipse(412 ,237,40)
  ellipse(434 ,241,40)
  ellipse(494 ,235,40)
  ellipse(444 ,214,40)
  ellipse(476 ,204,40)
  ellipse(474 ,233,40)
  ellipse(460 ,236,40)
  ellipse(455 ,247,40)
  ellipse(424 ,267,40)
  ellipse(453 ,274,40)
  ellipse(464 ,276,40)
  ellipse(449 ,284,40)
  ellipse(464 ,295,40)
  ellipse(497 ,306,40)
  ellipse(497 ,343,40)
  ellipse(490 ,291,40)
  ellipse(495 ,269,40)
  ellipse(523 ,259,40)
  ellipse(430 ,334,40)
  ellipse(388 ,332,40)
  ellipse(364 ,342,40)
  ellipse(342 ,364,40)
  ellipse(332 ,365,40)
  ellipse(330 ,428,40)
  ellipse(433 ,400,40)
  ellipse(419 ,436,40)
  ellipse(456 ,422,40)
  ellipse(467 ,441,40)
  ellipse(539 ,343,40)
  ellipse(551 ,400,40)
  ellipse(551 ,318,40)
  ellipse(537 ,283,40)
  ellipse(525 ,287,40)
  ellipse(603 ,309,40)
  ellipse(250 ,358,40)
  ellipse(297 ,351,40)
  ellipse(280 ,359,40)
  ellipse(419 ,473,40)
  ellipse(345 ,461,40)
  ellipse(374 ,448,40)
  ellipse(415 ,449,40)
  ellipse(438 ,446,40)
  ellipse(406 ,394,40)
  ellipse(408 ,373,40)
  ellipse(467 ,388,40)
  ellipse(472 ,396,40)
  ellipse(498 ,374,40)
  ellipse(586 ,340,40)
  ellipse(591 ,363,40)
  ellipse(611 ,355,40)
  ellipse(610 ,340,40)
  ellipse(578 ,298,40)
  ellipse(561 ,280,40)
  ellipse(569 ,275,40)
  ellipse(351 ,224,40)
  ellipse(285 ,220,40)
  ellipse(302 ,277,40)
  ellipse(402 ,272,40)
  ellipse(392 ,249,40)
  ellipse(378 ,285,40)
  ellipse(410 ,320,40)
  ellipse(440 ,334,40)
  ellipse(509 ,323,40)
  ellipse(471 ,256,40)
  ellipse(568 ,312,40)
  ellipse(559 ,346,40)
  ellipse(531 ,302,40)
  ellipse(529 ,399,40)
  ellipse(532 ,387,40)
  ellipse(483 ,412,40)
  ellipse(498 ,436,40)
  ellipse(484 ,448,40)
  ellipse(576 ,406,40)
  ellipse(608 ,411,40)
  ellipse(354 ,398,40)
  ellipse(393 ,376,40)
  ellipse(419 ,405,40)
  ellipse(433 ,424,40)
  ellipse(328 ,410,40)
  ellipse(285 ,367,40)
  ellipse(308 ,324,40)
  ellipse(245 ,341,40)
  ellipse(217 ,342,40)
  ellipse(232 ,315,40)
  ellipse(266 ,255,40)
  ellipse(234 ,224 ,40)
  ellipse(616 ,296,40)
  ellipse(550 ,260,40)
  ellipse(505 ,234,40)
  ellipse(510 ,178,40)
  ellipse(529 ,319,40)
  ellipse(466 ,339,40)
  ellipse(349 ,418,40)
  ellipse(391 ,454,40)
  ellipse(636 ,418,40)
  ellipse(650 ,465,40)
  ellipse(705 ,418,40)
  ellipse(659 ,383,40)
  ellipse(737 ,380,40)
  ellipse( 291, 440,40)
  ellipse(292 ,451,40)
  ellipse(646,294 ,40)
  ellipse(679 ,328,40)
  ellipse(658 ,337,40)
  ellipse(684 ,317,40)
  ellipse(671 ,307,40)
  ellipse(705 ,364,40)
  ellipse(624 ,264,40)

  fill(255, 201, 0 )
  stroke(255, 201, 0 )
  ellipse(400, 200, 600, 600);

  fill(18, 176, 40)
  stroke(18, 176, 40 )
  rect(-0, 700 ,800)
  
  
  
  tree();


}

}


 





//function mousePressed() {
  //if (mouseButton == LEFT) {
    //console.log(mouseX,mouseY);
    //fill(5, 255, 0  );
    //noStroke();
   // ellipseMode(CENTER);
    //ellipse(mouseX, mouseY, widthRect, heightRect);
   
 // }
//}

function tree() {

  push();
  //   angle = slider.value();
  angle = 0.42;
  //   console.log(slider.value())
  stroke(124, 70, 58); //color of the stroke

  strokeWeight(2); //how wide the troke iss
  translate(width * 0.5, height);
  branch(200);

  stroke(124, 70, 58);

  strokeWeight(39); //main trunk
  line(1, 1, 1, 200);

  triangle(-90, 241, 2, 241, 0, 155); //stump
  triangle(39, 181, 40, 233, 114, 234);

  stroke(124, 70, 58); //first 2 brances
  strokeWeight(20);
  line(60, -120, 0, 15);
  line(-50, -120, -5, 15);

  stroke(124, 70, 58); //second 4 branches
  strokeWeight(11);
  line(60, -120, 57, -220);
  line(60, -125, 125, -190);

  line(-55, -125, -125, -190);
  line(-55, -125, -57, -225);

  pop();
}

function branch(len) {
  // end branches
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.7); //end  branch length and curviture
    pop(); // brings the branches up
    push();
    rotate(-angle);
    branch(len * 0.7);
    pop();
  }
}


