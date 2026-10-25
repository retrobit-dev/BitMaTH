/**
 * Panggung gerbang sekolah — digambar sebagai blok piksel SVG (bukan gambar
 * raster) supaya tajam di semua ukuran dan warnanya bisa dikendalikan CSS.
 * Suasana senja: langit berlapis, gedung sekolah di kejauhan, gerbang besi
 * terbuka, papan nama, lampu taman, dan bendera.
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
      <rect x="0" y="0" width="320" height="44" fill="#1e2631" />
      <rect x="0" y="44" width="320" height="46" fill="#252e3a" />
      <rect x="0" y="90" width="320" height="44" fill="#2d3844" />
      <rect x="0" y="134" width="320" height="36" fill="#36424e" />

      {/* awan piksel */}
      <g fill="#47535f">
        <rect x="26" y="58" width="30" height="7" />
        <rect x="18" y="65" width="46" height="6" />
        <rect x="196" y="44" width="34" height="6" />
        <rect x="188" y="50" width="50" height="6" />
        <rect x="118" y="86" width="26" height="5" />
        <rect x="112" y="91" width="38" height="5" />
      </g>

      {/* bulan */}
      <rect x="268" y="26" width="16" height="16" fill="#c9bfa0" />
      <rect x="271" y="29" width="10" height="10" fill="#e7dcbc" />

      {/* bintang kecil */}
      <g fill="#cdd4c4">
        <rect x="52" y="30" width="2" height="2" />
        <rect x="96" y="22" width="2" height="2" />
        <rect x="148" y="40" width="2" height="2" />
        <rect x="212" y="26" width="2" height="2" />
        <rect x="240" y="58" width="2" height="2" />
        <rect x="76" y="86" width="2" height="2" />
      </g>

      {/* lanskap digeser naik 40u agar dasar gerbang tidak tertutup panel */}
      <g transform="translate(0,-40)">
      {/* --------------------------------------- gedung sekolah di kejauhan */}
      <rect x="74" y="150" width="172" height="52" fill="#2b333c" />
      <rect x="70" y="144" width="180" height="7" fill="#39424d" />
      <rect x="70" y="144" width="180" height="2" fill="#465162" />

      {/* menara jam */}
      <rect x="150" y="96" width="20" height="56" fill="#2f3841" />
      <rect x="147" y="90" width="26" height="7" fill="#3d4753" />
      <rect x="158" y="78" width="4" height="12" fill="#3d4753" />
      <rect x="154" y="112" width="12" height="12" fill="#d9d2b8" />
      <rect x="157" y="114" width="1" height="5" fill="#2b333c" />
      <rect x="158" y="117" width="4" height="1" fill="#2b333c" />

      {/* jendela bercahaya */}
      <g fill="#b8912f">
        <rect x="84" y="160" width="7" height="9" />
        <rect x="98" y="160" width="7" height="9" />
        <rect x="112" y="160" width="7" height="9" />
        <rect x="126" y="160" width="7" height="9" />
        <rect x="188" y="160" width="7" height="9" />
        <rect x="202" y="160" width="7" height="9" />
        <rect x="216" y="160" width="7" height="9" />
        <rect x="230" y="160" width="7" height="9" />
      </g>
      <g fill="#8a6b22">
        <rect x="84" y="176" width="7" height="9" />
        <rect x="112" y="176" width="7" height="9" />
        <rect x="202" y="176" width="7" height="9" />
        <rect x="230" y="176" width="7" height="9" />
      </g>

      {/* ------------------------------------ halaman dalam (di balik gerbang) */}
      {/* hamparan halaman, menyempit ke belakang (perspektif) */}
      <polygon points="126,262 188,262 176,200 138,200" fill="#2f3828" />
      <polygon points="126,262 188,262 176,200 138,200" fill="none" stroke="#39422f" strokeWidth="1" />
      {/* jalan masuk ke dalam sekolah */}
      <polygon points="146,262 168,262 162,200 152,200" fill="#43403a" />
      <polygon points="146,262 168,262 162,200 152,200" fill="none" stroke="#524d43" strokeWidth="1" />
      {/* pintu masuk bercahaya di ujung halaman */}
      <rect x="150" y="176" width="20" height="26" fill="#1d2530" />
      <rect x="152" y="178" width="16" height="24" fill="#8a6b22" />
      <rect x="152" y="178" width="16" height="3" fill="#b8912f" />
      <rect x="159" y="178" width="1" height="24" fill="#5f4a17" />
      <rect x="148" y="200" width="24" height="2" fill="#54604a" />

      {/* garis rumput */}
      <rect x="132" y="240" width="10" height="2" fill="#364029" />
      <rect x="170" y="230" width="10" height="2" fill="#364029" />
      <rect x="136" y="216" width="8" height="2" fill="#364029" />
      <rect x="170" y="212" width="7" height="2" fill="#364029" />
      {/* pot di dalam halaman */}
      <rect x="130" y="252" width="6" height="7" fill="#5c4f3a" />
      <rect x="131" y="248" width="4" height="5" fill="#2c3d27" />
      <rect x="178" y="246" width="6" height="7" fill="#5c4f3a" />
      <rect x="179" y="242" width="4" height="5" fill="#2c3d27" />

      {/* -------------------------------------------------- pepohonan sisi */}
      <g fill="#22301f">
        <rect x="8" y="150" width="52" height="52" />
        <rect x="2" y="164" width="18" height="34" />
        <rect x="52" y="158" width="18" height="30" />
      </g>
      <g fill="#2c3d27">
        <rect x="12" y="156" width="38" height="18" />
        <rect x="20" y="150" width="24" height="10" />
        <rect x="6" y="170" width="14" height="22" />
      </g>
      <rect x="30" y="202" width="8" height="18" fill="#3a2f22" />

      <g fill="#22301f">
        <rect x="260" y="150" width="52" height="52" />
        <rect x="248" y="164" width="16" height="34" />
        <rect x="300" y="158" width="16" height="30" />
      </g>
      <g fill="#2c3d27">
        <rect x="264" y="156" width="38" height="18" />
        <rect x="272" y="150" width="24" height="10" />
        <rect x="298" y="170" width="14" height="22" />
      </g>
      <rect x="282" y="202" width="8" height="18" fill="#3a2f22" />

      {/* ------------------------------------------------- dinding pagar */}
      <g fill="#3f3a31">
        <rect x="0" y="204" width="72" height="58" />
        <rect x="248" y="204" width="72" height="58" />
      </g>
      {/* bilah pagar */}
      <g fill="#241f19">
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={`fl-${i}`} x={4 + i * 9} y="208" width="3" height="50" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={`fr-${i}`} x={252 + i * 9} y="208" width="3" height="50" />
        ))}
      </g>
      <rect x="0" y="208" width="72" height="3" fill="#57503f" />
      <rect x="248" y="208" width="72" height="3" fill="#57503f" />
      <rect x="0" y="252" width="72" height="3" fill="#57503f" />
      <rect x="248" y="252" width="72" height="3" fill="#57503f" />

      {/* ------------------------------------------------------- tiang gerbang */}
      <rect x="70" y="168" width="30" height="96" fill="#5c4f3a" />
      <rect x="72" y="170" width="26" height="92" fill="#6d5e45" />
      <rect x="72" y="170" width="6" height="92" fill="#7d6c51" />
      <rect x="66" y="160" width="38" height="10" fill="#7d6c51" />
      <rect x="66" y="160" width="38" height="3" fill="#8f7d5f" />

      <rect x="220" y="168" width="30" height="96" fill="#5c4f3a" />
      <rect x="222" y="170" width="26" height="92" fill="#6d5e45" />
      <rect x="222" y="170" width="6" height="92" fill="#7d6c51" />
      <rect x="216" y="160" width="38" height="10" fill="#7d6c51" />
      <rect x="216" y="160" width="38" height="3" fill="#8f7d5f" />

      {/* ---------------------------------------------------- papan nama */}
      {/* balok penghubung antar tiang */}
      <rect x="74" y="152" width="172" height="8" fill="#5c4f3a" />
      <rect x="74" y="152" width="172" height="2" fill="#7d6c51" />
      <rect x="96" y="126" width="128" height="28" fill="#201b15" />
      <rect x="98" y="128" width="124" height="24" fill="#2a241c" />
      <rect x="96" y="126" width="128" height="2" fill="#8a6414" />
      <rect x="96" y="152" width="128" height="2" fill="#8a6414" />
      <text
        x="160"
        y="141"
        textAnchor="middle"
        fill="#e2a92b"
        fontFamily="Silkscreen, monospace"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.4"
      >
        SMA NEGERI 1
      </text>
      <text
        x="160"
        y="149"
        textAnchor="middle"
        fill="#9c8a63"
        fontFamily="Silkscreen, monospace"
        fontSize="4"
        letterSpacing="1.2"
      >
        BITMATH SCHOOL
      </text>

      {/* ------------------------------ daun gerbang terbuka (di sisi tiang) */}
      <g fill="#221e19">
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={`gl-${i}`} x={102 + i * 7} y="178" width="3" height="82" />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={`gr-${i}`} x={190 + i * 7} y="178" width="3" height="82" />
        ))}
      </g>
      <g fill="#4d4638">
        <rect x="100" y="178" width="26" height="3" />
        <rect x="188" y="178" width="26" height="3" />
        <rect x="100" y="224" width="26" height="2" />
        <rect x="188" y="224" width="26" height="2" />
        <rect x="100" y="254" width="26" height="3" />
        <rect x="188" y="254" width="26" height="3" />
      </g>
      {/* engsel */}
      <rect x="100" y="182" width="3" height="6" fill="#8a6414" />
      <rect x="100" y="230" width="3" height="6" fill="#8a6414" />
      <rect x="211" y="182" width="3" height="6" fill="#8a6414" />
      <rect x="211" y="230" width="3" height="6" fill="#8a6414" />

      {/* ----------------------------------------------------------- lampu */}
      <rect x="42" y="176" width="4" height="90" fill="#2f2a22" />
      <rect x="38" y="168" width="12" height="8" fill="#3c352a" />
      <rect x="39" y="170" width="10" height="5" fill="#e2a92b" />
      <rect x="274" y="176" width="4" height="90" fill="#2f2a22" />
      <rect x="270" y="168" width="12" height="8" fill="#3c352a" />
      <rect x="271" y="170" width="10" height="5" fill="#e2a92b" />

      {/* --------------------------------------------------------- bendera */}
      <rect x="304" y="150" width="3" height="116" fill="#5a5344" />
      <rect x="279" y="152" width="25" height="8" fill="#b23a2f" />
      <rect x="279" y="160" width="25" height="8" fill="#ded7c4" />

      {/* --------------------------------------------------------- tanah */}
      <rect x="0" y="262" width="320" height="200" fill="#2b3226" />
      <rect x="0" y="262" width="320" height="4" fill="#232a20" />

      {/* jalan masuk */}
      <polygon points="138,262 182,262 246,460 74,460" fill="#43403a" />
      <polygon points="138,262 182,262 244,460 76,460" fill="none" stroke="#524d43" strokeWidth="2" />
      <g fill="#4e4a42">
        <rect x="150" y="278" width="20" height="3" />
        <rect x="146" y="300" width="28" height="3" />
        <rect x="140" y="328" width="40" height="3" />
        <rect x="134" y="362" width="52" height="3" />
        <rect x="126" y="398" width="68" height="3" />
        <rect x="118" y="436" width="84" height="3" />
      </g>

      {/* rumput & semak */}
      <g fill="#33402d">
        <rect x="0" y="262" width="86" height="10" />
        <rect x="234" y="262" width="86" height="10" />
      </g>
      <g fill="#243021">
        <rect x="18" y="276" width="26" height="12" />
        <rect x="24" y="270" width="16" height="8" />
        <rect x="276" y="276" width="26" height="12" />
        <rect x="282" y="270" width="16" height="8" />
      </g>

      {/* kolam cahaya lampu (datar, tanpa glow) */}
      <g fill="#6b5a2c" opacity="0.5">
        <rect x="28" y="290" width="34" height="4" />
        <rect x="258" y="290" width="34" height="4" />
      </g>

      {/* ------------------------------------------------------- karakter */}
      <ellipse cx="197" cy="263" rx="12" ry="3" fill="#221d17" />
      <image
        href="/sprites/guru-pdh.png"
        x="185"
        y="194"
        width="24"
        height="69"
        preserveAspectRatio="xMidYMax meet"
      />
      </g>
    </svg>
  )
}
