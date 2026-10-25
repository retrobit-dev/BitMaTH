/**
 * Panggung gerbang sekolah — pagi terang.
 * Digambar sebagai blok piksel SVG (bukan raster) supaya tajam di semua
 * ukuran dan warnanya bisa dikendalikan CSS. Langit pagi biru muda, matahari
 * rendah, gedung sekolah berkrem dengan atap terakota, gerbang besi hijau tua,
 * papan nama hijau berhuruf krem, dan jalan masuk beraspal terang.
 */
export function SchoolGateScene() {
  return (
    <svg
      className="stage"
      viewBox="0 0 320 420"
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* ---------------------------------------------------------- langit */}
      <rect x="0" y="0" width="320" height="44" fill="#7fb6d8" />
      <rect x="0" y="44" width="320" height="46" fill="#96c6e2" />
      <rect x="0" y="90" width="320" height="44" fill="#aed5ea" />
      <rect x="0" y="134" width="320" height="36" fill="#c4e2f0" />

      {/* matahari pagi */}
      <rect x="248" y="20" width="26" height="26" fill="#f6e3a6" />
      <rect x="251" y="23" width="20" height="20" fill="#fbf2cf" />
      <rect x="244" y="32" width="4" height="2" fill="#f6e3a6" />
      <rect x="274" y="32" width="4" height="2" fill="#f6e3a6" />
      <rect x="259" y="14" width="2" height="4" fill="#f6e3a6" />
      <rect x="259" y="48" width="2" height="4" fill="#f6e3a6" />

      {/* awan pagi */}
      <g fill="#f4f9fb">
        <rect x="26" y="52" width="34" height="8" />
        <rect x="18" y="60" width="52" height="7" />
        <rect x="188" y="40" width="36" height="7" />
        <rect x="180" y="47" width="52" height="7" />
        <rect x="112" y="84" width="28" height="6" />
        <rect x="106" y="90" width="40" height="6" />
      </g>
      <g fill="#dbeaf2">
        <rect x="18" y="67" width="52" height="3" />
        <rect x="180" y="54" width="52" height="3" />
        <rect x="106" y="96" width="40" height="3" />
      </g>

      {/* burung pagi */}
      <g fill="#5c7787">
        <rect x="86" y="34" width="3" height="2" />
        <rect x="89" y="32" width="2" height="2" />
        <rect x="91" y="34" width="3" height="2" />
        <rect x="146" y="22" width="3" height="2" />
        <rect x="149" y="20" width="2" height="2" />
        <rect x="151" y="22" width="3" height="2" />
      </g>

      {/* --------------------------------------- gedung sekolah di kejauhan */}
      <rect x="74" y="150" width="172" height="52" fill="#e6d9bd" />
      <rect x="70" y="142" width="180" height="7" fill="#d3bf99" />
      <rect x="70" y="142" width="180" height="2" fill="#e8dcc0" />

      {/* atap terakota */}
      <polygon points="66,142 254,142 246,132 74,132" fill="#b8573a" />
      <polygon points="66,142 254,142 254,146 66,146" fill="#95452e" />

      {/* menara jam */}
      <rect x="150" y="66" width="20" height="60" fill="#e0d3b7" />
      <rect x="147" y="60" width="26" height="7" fill="#d3bf99" />
      <rect x="158" y="48" width="4" height="12" fill="#b9a682" />
      <polygon points="144,60 176,60 168,48 152,48" fill="#b8573a" />
      <rect x="154" y="82" width="12" height="12" fill="#f4ecd4" />
      <rect x="157" y="84" width="1" height="5" fill="#3a3a35" />
      <rect x="158" y="87" width="4" height="1" fill="#3a3a35" />

      {/* jendela: kaca terang */}
      <g fill="#7fa2b8">
        <rect x="84" y="160" width="7" height="9" />
        <rect x="98" y="160" width="7" height="9" />
        <rect x="112" y="160" width="7" height="9" />
        <rect x="126" y="160" width="7" height="9" />
        <rect x="188" y="160" width="7" height="9" />
        <rect x="202" y="160" width="7" height="9" />
        <rect x="216" y="160" width="7" height="9" />
        <rect x="230" y="160" width="7" height="9" />
      </g>
      <g fill="#cfe6f0">
        <rect x="84" y="160" width="4" height="4" />
        <rect x="112" y="160" width="4" height="4" />
        <rect x="188" y="160" width="4" height="4" />
        <rect x="216" y="160" width="4" height="4" />
      </g>
      <g fill="#5f8298">
        <rect x="84" y="176" width="7" height="9" />
        <rect x="112" y="176" width="7" height="9" />
        <rect x="202" y="176" width="7" height="9" />
        <rect x="230" y="176" width="7" height="9" />
      </g>

      {/* ------------------------------------ halaman dalam (di balik gerbang) */}
      {/* hamparan halaman, menyempit ke belakang (perspektif) */}
      <polygon points="126,262 188,262 176,200 138,200" fill="#6f9c50" />
      {/* jalan masuk ke dalam sekolah */}
      <polygon points="146,262 168,262 162,200 152,200" fill="#cbc4b2" />
      {/* pintu masuk bercahaya di ujung halaman */}
      <rect x="150" y="176" width="20" height="26" fill="#8a6a45" />
      <rect x="152" y="178" width="16" height="24" fill="#d9a45c" />
      <rect x="159" y="178" width="1" height="24" fill="#a97c40" />
      <rect x="148" y="200" width="24" height="2" fill="#b0a892" />
      {/* garis rumput */}
      <rect x="132" y="240" width="10" height="2" fill="#5f8a45" />
      <rect x="170" y="230" width="10" height="2" fill="#5f8a45" />
      <rect x="136" y="216" width="8" height="2" fill="#5f8a45" />
      <rect x="170" y="212" width="7" height="2" fill="#5f8a45" />
      {/* pot di dalam halaman */}
      <rect x="130" y="252" width="6" height="7" fill="#a2603c" />
      <rect x="131" y="248" width="4" height="5" fill="#4b7a44" />
      <rect x="178" y="246" width="6" height="7" fill="#a2603c" />
      <rect x="179" y="242" width="4" height="5" fill="#4b7a44" />

      {/* -------------------------------------------------- pepohonan sisi */}
      <g fill="#4b7a44">
        <rect x="8" y="150" width="52" height="52" />
        <rect x="2" y="164" width="18" height="34" />
        <rect x="52" y="158" width="18" height="30" />
      </g>
      <g fill="#5d9152">
        <rect x="12" y="156" width="38" height="18" />
        <rect x="20" y="150" width="24" height="10" />
        <rect x="6" y="170" width="14" height="22" />
      </g>
      <rect x="30" y="202" width="8" height="18" fill="#6b4f34" />

      <g fill="#4b7a44">
        <rect x="260" y="150" width="52" height="52" />
        <rect x="248" y="164" width="16" height="34" />
        <rect x="300" y="158" width="16" height="30" />
      </g>
      <g fill="#5d9152">
        <rect x="264" y="156" width="38" height="18" />
        <rect x="272" y="150" width="24" height="10" />
        <rect x="298" y="170" width="14" height="22" />
      </g>
      <rect x="282" y="202" width="8" height="18" fill="#6b4f34" />

      {/* ------------------------------------------------- dinding & pagar besi */}
      <g fill="#cfbf9e">
        <rect x="0" y="204" width="72" height="58" />
        <rect x="248" y="204" width="72" height="58" />
      </g>
      <g fill="#2f4a3c">
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={`fl-${i}`} x={4 + i * 9} y="208" width="3" height="50" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={`fr-${i}`} x={252 + i * 9} y="208" width="3" height="50" />
        ))}
      </g>
      <rect x="0" y="208" width="72" height="3" fill="#3d5c4a" />
      <rect x="248" y="208" width="72" height="3" fill="#3d5c4a" />
      <rect x="0" y="252" width="72" height="3" fill="#3d5c4a" />
      <rect x="248" y="252" width="72" height="3" fill="#3d5c4a" />

      {/* ------------------------------------------------------- tiang gerbang */}
      <rect x="70" y="168" width="30" height="96" fill="#b9a682" />
      <rect x="72" y="170" width="26" height="92" fill="#d8c8a6" />
      <rect x="72" y="170" width="6" height="92" fill="#e8dcc0" />
      <rect x="66" y="158" width="38" height="12" fill="#e8dcc0" />
      <rect x="66" y="158" width="38" height="3" fill="#f2e9d2" />

      <rect x="220" y="168" width="30" height="96" fill="#b9a682" />
      <rect x="222" y="170" width="26" height="92" fill="#d8c8a6" />
      <rect x="222" y="170" width="6" height="92" fill="#e8dcc0" />
      <rect x="216" y="158" width="38" height="12" fill="#e8dcc0" />
      <rect x="216" y="158" width="38" height="3" fill="#f2e9d2" />

      {/* ---------------------------------------------------- balok & papan nama */}
      <rect x="74" y="152" width="172" height="8" fill="#b9a682" />
      <rect x="74" y="152" width="172" height="2" fill="#e8dcc0" />

      <rect x="92" y="124" width="136" height="28" fill="#163a2c" />
      <rect x="94" y="126" width="132" height="24" fill="#1e4335" />
      <rect x="92" y="124" width="136" height="2" fill="#c9a545" />
      <rect x="92" y="150" width="136" height="2" fill="#c9a545" />
      <text
        x="160"
        y="140"
        textAnchor="middle"
        fill="#f4ead0"
        fontFamily="Silkscreen, monospace"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.3"
      >
        SMA NEGERI REMBANG
      </text>
      <text
        x="160"
        y="147"
        textAnchor="middle"
        fill="#9dbba9"
        fontFamily="Silkscreen, monospace"
        fontSize="4"
        letterSpacing="1.2"
      >
        BITMATH SCHOOL
      </text>

      {/* ------------------------------ daun gerbang terbuka (di sisi tiang) */}
      <g fill="#26443a">
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={`gl-${i}`} x={102 + i * 7} y="178" width="3" height="82" />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={`gr-${i}`} x={190 + i * 7} y="178" width="3" height="82" />
        ))}
      </g>
      <g fill="#3d5c4a">
        <rect x="100" y="178" width="26" height="3" />
        <rect x="188" y="178" width="26" height="3" />
        <rect x="100" y="224" width="26" height="2" />
        <rect x="188" y="224" width="26" height="2" />
        <rect x="100" y="254" width="26" height="3" />
        <rect x="188" y="254" width="26" height="3" />
      </g>
      {/* engsel */}
      <rect x="100" y="182" width="3" height="6" fill="#c9a545" />
      <rect x="100" y="230" width="3" height="6" fill="#c9a545" />
      <rect x="211" y="182" width="3" height="6" fill="#c9a545" />
      <rect x="211" y="230" width="3" height="6" fill="#c9a545" />

      {/* ----------------------------------------------------------- lampu */}
      <rect x="42" y="176" width="4" height="90" fill="#7a6a52" />
      <rect x="38" y="166" width="12" height="10" fill="#8f7d5f" />
      <rect x="39" y="168" width="10" height="6" fill="#f6e6a8" />
      <rect x="274" y="176" width="4" height="90" fill="#7a6a52" />
      <rect x="270" y="166" width="12" height="10" fill="#8f7d5f" />
      <rect x="271" y="168" width="10" height="6" fill="#f6e6a8" />

      {/* --------------------------------------------------------- bendera */}
      <rect x="304" y="150" width="3" height="116" fill="#8f7d5f" />
      <rect x="279" y="152" width="25" height="8" fill="#c0392b" />
      <rect x="279" y="160" width="25" height="8" fill="#f5f2e8" />

      {/* --------------------------------------------------------- tanah */}
      <rect x="0" y="262" width="320" height="200" fill="#6a9b4d" />
      <rect x="0" y="262" width="320" height="4" fill="#5b8842" />

      {/* jalan masuk */}
      <polygon points="138,262 182,262 246,460 74,460" fill="#c9c3b4" />
      <polygon points="138,262 182,262 244,460 76,460" fill="none" stroke="#b3ac9c" strokeWidth="2" />
      <g fill="#b3ac9c">
        <rect x="150" y="278" width="20" height="3" />
        <rect x="146" y="300" width="28" height="3" />
        <rect x="140" y="328" width="40" height="3" />
        <rect x="134" y="362" width="52" height="3" />
        <rect x="126" y="398" width="68" height="3" />
        <rect x="118" y="436" width="84" height="3" />
      </g>
      {/* kerb */}
      <polygon points="130,262 138,262 74,460 60,460" fill="#a89f8d" />
      <polygon points="182,262 190,262 260,460 246,460" fill="#a89f8d" />

      {/* rumput & semak */}
      <g fill="#75a556">
        <rect x="0" y="262" width="80" height="10" />
        <rect x="240" y="262" width="80" height="10" />
      </g>
      <g fill="#54843f">
        <rect x="18" y="276" width="26" height="12" />
        <rect x="24" y="270" width="16" height="8" />
        <rect x="276" y="276" width="26" height="12" />
        <rect x="282" y="270" width="16" height="8" />
      </g>

      {/* cahaya pagi di tanah (datar, tanpa glow) */}
      <g fill="#8fb96c" opacity="0.6">
        <rect x="28" y="292" width="34" height="4" />
        <rect x="258" y="292" width="34" height="4" />
      </g>

      {/* ------------------------------------------------------- karakter */}
      <ellipse cx="197" cy="263" rx="12" ry="3" fill="#4c6b3a" />
      <image
        href="/sprites/guru-pdh.png"
        x="185"
        y="194"
        width="24"
        height="69"
        preserveAspectRatio="xMidYMax meet"
      />
    </svg>
  )
}
