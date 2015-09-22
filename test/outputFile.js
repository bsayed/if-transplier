var solver, framesTillAddingPoints, framesBetweenAddingPoints;
solver = null;
function runNavierStokes() {
    var $tmp0;
    $tmp0 = solver.update();
}
function setupNavierStokes() {
    solver = new FluidField(null);
    var $tmp1, $tmp2, $tmp3, $tmp4, $tmp5, $tmp6;
    $tmp1 = solver.setResolution(128, 128);
    $tmp2 = solver.setIterations(20);
    $tmp4 = function () {
    };
    $tmp3 = solver.setDisplayFunction($tmp4);
    $tmp5 = solver.setUICallback(prepareFrame);
    $tmp6 = solver.reset();
}
function tearDownNavierStokes() {
    solver = null;
}
function addPoints(field) {
    var n, i, $tmp8;
    n = 64;
    i = 1;
    $tmp8 = i <= n;
    for (; $tmp8;) {
        var $tmp9, $tmp10, $tmp11, $tmp12, $tmp13, $tmp14, $tmp15, $tmp16, $tmp17, $tmp18, $tmp19, $tmp20, $tmp21, $tmp22, $tmp23, $tmp24, $tmp7, $tmp8;
        $tmp9 = field.setVelocity(i, i, n, n);
        $tmp10 = field.setDensity(i, i, 5);
        $tmp12 = n - i;
        $tmp13 = -n;
        $tmp14 = -n;
        $tmp11 = field.setVelocity(i, $tmp12, $tmp13, $tmp14);
        $tmp16 = n - i;
        $tmp15 = field.setDensity(i, $tmp16, 20);
        $tmp18 = 128 - i;
        $tmp19 = n + i;
        $tmp20 = -n;
        $tmp21 = -n;
        $tmp17 = field.setVelocity($tmp18, $tmp19, $tmp20, $tmp21);
        $tmp23 = 128 - i;
        $tmp24 = n + i;
        $tmp22 = field.setDensity($tmp23, $tmp24, 30);
        $tmp7 = i++;
        $tmp8 = i <= n;
    }
}
framesTillAddingPoints = 0;
framesBetweenAddingPoints = 5;
function prepareFrame(field) {
    var $tmp25;
    $tmp25 = framesTillAddingPoints == 0;
    if ($tmp25) {
        var $tmp26, $tmp27;
        $tmp26 = addPoints(field);
        framesTillAddingPoints = framesBetweenAddingPoints;
        $tmp27 = framesBetweenAddingPoints++;
    } else {
        var $tmp28;
        $tmp28 = framesTillAddingPoints--;
    }
}
function FluidField(canvas) {
    function addFields(x, s, dt) {
        var i, $tmp39;
        i = 0;
        $tmp39 = i < size;
        for (; $tmp39;) {
            var $tmp40, $tmp38, $tmp39;
            $tmp40 = s[i];
            x[i] += dt * $tmp40;
            $tmp38 = i++;
            $tmp39 = i < size;
        }
    }
    function set_bnd(b, x) {
        var $tmp41, maxEdge, $tmp42, $tmp43, $tmp44, $tmp45, $tmp46, $tmp47, $tmp48, $tmp49, $tmp50, $tmp51, $tmp52, $tmp53, $tmp54, $tmp55, $tmp56, $tmp57, $tmp58, $tmp59, $tmp60, $tmp61, $tmp62, $tmp63, $tmp64, $tmp65;
        $tmp41 = b === 1;
        if ($tmp41) {
            var i, $tmp67, j, $tmp69;
            i = 1;
            $tmp67 = i <= width;
            for (; $tmp67;) {
                var $tmp70, $tmp71, $tmp72, $tmp73, $tmp74, $tmp75, $tmp66, $tmp67;
                $tmp70 = i + rowSize;
                x[i] = x[$tmp70];
                $tmp73 = height + 1;
                $tmp72 = $tmp73 * rowSize;
                $tmp71 = i + $tmp72;
                $tmp75 = height * rowSize;
                $tmp74 = i + $tmp75;
                x[$tmp71] = x[$tmp74];
                $tmp66 = i++;
                $tmp67 = i <= width;
            }
            j = 1;
            $tmp69 = i <= height;
            for (; $tmp69;) {
                var $tmp76, $tmp77, $tmp78, $tmp79, $tmp80, $tmp81, $tmp82, $tmp83, $tmp84, $tmp85, $tmp68, $tmp69;
                $tmp76 = j * rowSize;
                $tmp79 = j * rowSize;
                $tmp78 = 1 + $tmp79;
                $tmp77 = x[$tmp78];
                x[$tmp76] = -$tmp77;
                $tmp81 = width + 1;
                $tmp82 = j * rowSize;
                $tmp80 = $tmp81 + $tmp82;
                $tmp85 = j * rowSize;
                $tmp84 = width + $tmp85;
                $tmp83 = x[$tmp84];
                x[$tmp80] = -$tmp83;
                $tmp68 = i++;
                $tmp69 = i <= height;
            }
        } else {
            var $tmp334;
            $tmp334 = b === 2;
            if ($tmp334) {
                var i, $tmp87, j, $tmp89;
                i = 1;
                $tmp87 = i <= width;
                for (; $tmp87;) {
                    var $tmp90, $tmp91, $tmp92, $tmp93, $tmp94, $tmp95, $tmp96, $tmp97, $tmp86, $tmp87;
                    $tmp91 = i + rowSize;
                    $tmp90 = x[$tmp91];
                    x[i] = -$tmp90;
                    $tmp94 = height + 1;
                    $tmp93 = $tmp94 * rowSize;
                    $tmp92 = i + $tmp93;
                    $tmp97 = height * rowSize;
                    $tmp96 = i + $tmp97;
                    $tmp95 = x[$tmp96];
                    x[$tmp92] = -$tmp95;
                    $tmp86 = i++;
                    $tmp87 = i <= width;
                }
                j = 1;
                $tmp89 = j <= height;
                for (; $tmp89;) {
                    var $tmp98, $tmp99, $tmp100, $tmp101, $tmp102, $tmp103, $tmp104, $tmp105, $tmp88, $tmp89;
                    $tmp98 = j * rowSize;
                    $tmp100 = j * rowSize;
                    $tmp99 = 1 + $tmp100;
                    x[$tmp98] = x[$tmp99];
                    $tmp102 = width + 1;
                    $tmp103 = j * rowSize;
                    $tmp101 = $tmp102 + $tmp103;
                    $tmp105 = j * rowSize;
                    $tmp104 = width + $tmp105;
                    x[$tmp101] = x[$tmp104];
                    $tmp88 = j++;
                    $tmp89 = j <= height;
                }
            } else {
                var i, $tmp107, j, $tmp109;
                i = 1;
                $tmp107 = i <= width;
                for (; $tmp107;) {
                    var $tmp110, $tmp111, $tmp112, $tmp113, $tmp114, $tmp115, $tmp106, $tmp107;
                    $tmp110 = i + rowSize;
                    x[i] = x[$tmp110];
                    $tmp113 = height + 1;
                    $tmp112 = $tmp113 * rowSize;
                    $tmp111 = i + $tmp112;
                    $tmp115 = height * rowSize;
                    $tmp114 = i + $tmp115;
                    x[$tmp111] = x[$tmp114];
                    $tmp106 = i++;
                    $tmp107 = i <= width;
                }
                j = 1;
                $tmp109 = j <= height;
                for (; $tmp109;) {
                    var $tmp116, $tmp117, $tmp118, $tmp119, $tmp120, $tmp121, $tmp122, $tmp123, $tmp108, $tmp109;
                    $tmp116 = j * rowSize;
                    $tmp118 = j * rowSize;
                    $tmp117 = 1 + $tmp118;
                    x[$tmp116] = x[$tmp117];
                    $tmp120 = width + 1;
                    $tmp121 = j * rowSize;
                    $tmp119 = $tmp120 + $tmp121;
                    $tmp123 = j * rowSize;
                    $tmp122 = width + $tmp123;
                    x[$tmp119] = x[$tmp122];
                    $tmp108 = j++;
                    $tmp109 = j <= height;
                }
            }
        }
        $tmp42 = height + 1;
        maxEdge = $tmp42 * rowSize;
        $tmp44 = x[1];
        $tmp45 = x[rowSize];
        $tmp43 = $tmp44 + $tmp45;
        x[0] = 0.5 * $tmp43;
        $tmp48 = 1 + maxEdge;
        $tmp47 = x[$tmp48];
        $tmp50 = height * rowSize;
        $tmp49 = x[$tmp50];
        $tmp46 = $tmp47 + $tmp49;
        x[maxEdge] = 0.5 * $tmp46;
        $tmp51 = width + 1;
        $tmp53 = x[width];
        $tmp56 = width + 1;
        $tmp55 = $tmp56 + rowSize;
        $tmp54 = x[$tmp55];
        $tmp52 = $tmp53 + $tmp54;
        x[$tmp51] = 0.5 * $tmp52;
        $tmp58 = width + 1;
        $tmp57 = $tmp58 + maxEdge;
        $tmp61 = width + maxEdge;
        $tmp60 = x[$tmp61];
        $tmp64 = width + 1;
        $tmp65 = height * rowSize;
        $tmp63 = $tmp64 + $tmp65;
        $tmp62 = x[$tmp63];
        $tmp59 = $tmp60 + $tmp62;
        x[$tmp57] = 0.5 * $tmp59;
    }
    function lin_solve(b, x, x0, a, c) {
        var $tmp124;
        $tmp124 = a === 0 && c === 1;
        if ($tmp124) {
            var j, $tmp126, $tmp127;
            j = 1;
            $tmp126 = j <= height;
            for (; $tmp126;) {
                var currentRow, $tmp128, i, $tmp130, $tmp125, $tmp126;
                currentRow = j * rowSize;
                $tmp128 = ++currentRow;
                i = 0;
                $tmp130 = i < width;
                for (; $tmp130;) {
                    x[currentRow] = x0[currentRow];
                    var $tmp131, $tmp129, $tmp130;
                    $tmp131 = ++currentRow;
                    $tmp129 = i++;
                    $tmp130 = i < width;
                }
                $tmp125 = j++;
                $tmp126 = j <= height;
            }
            $tmp127 = set_bnd(b, x);
        } else {
            var invC, k, $tmp133;
            invC = 1 / c;
            k = 0;
            $tmp133 = k < iterations;
            for (; $tmp133;) {
                var j, $tmp135, $tmp136, $tmp132, $tmp133;
                j = 1;
                $tmp135 = j <= height;
                for (; $tmp135;) {
                    var lastRow, $tmp137, currentRow, nextRow, $tmp138, lastX, $tmp139, i, $tmp141, $tmp134, $tmp135;
                    $tmp137 = j - 1;
                    lastRow = $tmp137 * rowSize;
                    currentRow = j * rowSize;
                    $tmp138 = j + 1;
                    nextRow = $tmp138 * rowSize;
                    lastX = x[currentRow];
                    $tmp139 = ++currentRow;
                    i = 1;
                    $tmp141 = i <= width;
                    for (; $tmp141;) {
                        var $tmp142, $tmp143, $tmp144, $tmp145, $tmp146, $tmp147, $tmp148, $tmp149, $tmp150, $tmp151, $tmp152, $tmp153, $tmp140, $tmp141;
                        $tmp143 = x0[currentRow];
                        $tmp149 = ++currentRow;
                        $tmp148 = x[$tmp149];
                        $tmp147 = lastX + $tmp148;
                        $tmp151 = ++lastRow;
                        $tmp150 = x[$tmp151];
                        $tmp146 = $tmp147 + $tmp150;
                        $tmp153 = ++nextRow;
                        $tmp152 = x[$tmp153];
                        $tmp145 = $tmp146 + $tmp152;
                        $tmp144 = a * $tmp145;
                        $tmp142 = $tmp143 + $tmp144;
                        x[currentRow] = $tmp142 * invC;
                        lastX = x[currentRow];
                        $tmp140 = i++;
                        $tmp141 = i <= width;
                    }
                    $tmp134 = j++;
                    $tmp135 = j <= height;
                }
                $tmp136 = set_bnd(b, x);
                $tmp132 = k++;
                $tmp133 = k < iterations;
            }
        }
    }
    function diffuse(b, x, x0, dt) {
        var a, $tmp154, $tmp155, $tmp156;
        a = 0;
        $tmp156 = 4 * a;
        $tmp155 = 1 + $tmp156;
        $tmp154 = lin_solve(b, x, x0, a, $tmp155);
    }
    function lin_solve2(x, x0, y, y0, a, c) {
        var $tmp157;
        $tmp157 = a === 0 && c === 1;
        if ($tmp157) {
            var j, $tmp159, $tmp160, $tmp161;
            j = 1;
            $tmp159 = j <= height;
            for (; $tmp159;) {
                var currentRow, $tmp162, i, $tmp164, $tmp158, $tmp159;
                currentRow = j * rowSize;
                $tmp162 = ++currentRow;
                i = 0;
                $tmp164 = i < width;
                for (; $tmp164;) {
                    x[currentRow] = x0[currentRow];
                    y[currentRow] = y0[currentRow];
                    var $tmp165, $tmp163, $tmp164;
                    $tmp165 = ++currentRow;
                    $tmp163 = i++;
                    $tmp164 = i < width;
                }
                $tmp158 = j++;
                $tmp159 = j <= height;
            }
            $tmp160 = set_bnd(1, x);
            $tmp161 = set_bnd(2, y);
        } else {
            var invC, k, $tmp167;
            invC = 1 / c;
            k = 0;
            $tmp167 = k < iterations;
            for (; $tmp167;) {
                var j, $tmp169, $tmp170, $tmp171, $tmp166, $tmp167;
                j = 1;
                $tmp169 = j <= height;
                for (; $tmp169;) {
                    var lastRow, $tmp172, currentRow, nextRow, $tmp173, lastX, lastY, $tmp174, i, $tmp176, $tmp168, $tmp169;
                    $tmp172 = j - 1;
                    lastRow = $tmp172 * rowSize;
                    currentRow = j * rowSize;
                    $tmp173 = j + 1;
                    nextRow = $tmp173 * rowSize;
                    lastX = x[currentRow];
                    lastY = y[currentRow];
                    $tmp174 = ++currentRow;
                    i = 1;
                    $tmp176 = i <= width;
                    for (; $tmp176;) {
                        var $tmp177, $tmp178, $tmp179, $tmp180, $tmp181, $tmp182, $tmp183, $tmp184, $tmp185, $tmp186, $tmp187, $tmp188, $tmp189, $tmp190, $tmp191, $tmp192, $tmp193, $tmp194, $tmp195, $tmp196, $tmp197, $tmp175, $tmp176;
                        $tmp178 = x0[currentRow];
                        $tmp183 = x[currentRow];
                        $tmp182 = lastX + $tmp183;
                        $tmp184 = x[lastRow];
                        $tmp181 = $tmp182 + $tmp184;
                        $tmp185 = x[nextRow];
                        $tmp180 = $tmp181 + $tmp185;
                        $tmp179 = a * $tmp180;
                        $tmp177 = $tmp178 + $tmp179;
                        x[currentRow] = $tmp177 * invC;
                        lastX = x[currentRow];
                        $tmp187 = y0[currentRow];
                        $tmp193 = ++currentRow;
                        $tmp192 = y[$tmp193];
                        $tmp191 = lastY + $tmp192;
                        $tmp195 = ++lastRow;
                        $tmp194 = y[$tmp195];
                        $tmp190 = $tmp191 + $tmp194;
                        $tmp197 = ++nextRow;
                        $tmp196 = y[$tmp197];
                        $tmp189 = $tmp190 + $tmp196;
                        $tmp188 = a * $tmp189;
                        $tmp186 = $tmp187 + $tmp188;
                        y[currentRow] = $tmp186 * invC;
                        lastY = y[currentRow];
                        $tmp175 = i++;
                        $tmp176 = i <= width;
                    }
                    $tmp168 = j++;
                    $tmp169 = j <= height;
                }
                $tmp170 = set_bnd(1, x);
                $tmp171 = set_bnd(2, y);
                $tmp166 = k++;
                $tmp167 = k < iterations;
            }
        }
    }
    function diffuse2(x, x0, y, y0, dt) {
        var a, $tmp198, $tmp199, $tmp200;
        a = 0;
        $tmp200 = 4 * a;
        $tmp199 = 1 + $tmp200;
        $tmp198 = lin_solve2(x, x0, y, y0, a, $tmp199);
    }
    function advect(b, d, d0, u, v, dt) {
        var Wdt0, Hdt0, Wp5, Hp5, j, $tmp202, $tmp203;
        Wdt0 = dt * width;
        Hdt0 = dt * height;
        Wp5 = width + 0.5;
        Hp5 = height + 0.5;
        j = 1;
        $tmp202 = j <= height;
        for (; $tmp202;) {
            var pos, i, $tmp205, $tmp201, $tmp202;
            pos = j * rowSize;
            i = 1;
            $tmp205 = i <= width;
            for (; $tmp205;) {
                var x, $tmp206, $tmp207, $tmp208, y, $tmp209, $tmp210, $tmp211, i0, i1, $tmp212, j0, j1, s1, s0, t1, t0, row1, row2, $tmp213, $tmp214, $tmp215, $tmp216, $tmp217, $tmp218, $tmp219, $tmp220, $tmp221, $tmp222, $tmp223, $tmp224, $tmp225, $tmp226, $tmp227, $tmp228, $tmp204, $tmp205;
                $tmp208 = ++pos;
                $tmp207 = u[$tmp208];
                $tmp206 = Wdt0 * $tmp207;
                x = i - $tmp206;
                $tmp210 = v[pos];
                $tmp209 = Hdt0 * $tmp210;
                y = j - $tmp209;
                $tmp211 = x < 0.5;
                if ($tmp211) {
                    x = 0.5;
                } else {
                    var $tmp335;
                    $tmp335 = x > Wp5;
                    if ($tmp335) {
                        x = Wp5;
                    } else {
                    }
                }
                i0 = x | 0;
                i1 = i0 + 1;
                $tmp212 = y < 0.5;
                if ($tmp212) {
                    y = 0.5;
                } else {
                    var $tmp336;
                    $tmp336 = y > Hp5;
                    if ($tmp336) {
                        y = Hp5;
                    } else {
                    }
                }
                j0 = y | 0;
                j1 = j0 + 1;
                s1 = x - i0;
                s0 = 1 - s1;
                t1 = y - j0;
                t0 = 1 - t1;
                row1 = j0 * rowSize;
                row2 = j1 * rowSize;
                $tmp217 = i0 + row1;
                $tmp216 = d0[$tmp217];
                $tmp215 = t0 * $tmp216;
                $tmp220 = i0 + row2;
                $tmp219 = d0[$tmp220];
                $tmp218 = t1 * $tmp219;
                $tmp214 = $tmp215 + $tmp218;
                $tmp213 = s0 * $tmp214;
                $tmp225 = i1 + row1;
                $tmp224 = d0[$tmp225];
                $tmp223 = t0 * $tmp224;
                $tmp228 = i1 + row2;
                $tmp227 = d0[$tmp228];
                $tmp226 = t1 * $tmp227;
                $tmp222 = $tmp223 + $tmp226;
                $tmp221 = s1 * $tmp222;
                d[pos] = $tmp213 + $tmp221;
                $tmp204 = i++;
                $tmp205 = i <= width;
            }
            $tmp201 = j++;
            $tmp202 = j <= height;
        }
        $tmp203 = set_bnd(b, d);
    }
    function project(u, v, p, div) {
        var h, $tmp229, $tmp230, $tmp231, j, $tmp233, $tmp234, $tmp235, $tmp236, wScale, hScale, j, $tmp238, $tmp239, $tmp240;
        $tmp229 = -0.5;
        $tmp231 = width * height;
        $tmp230 = Math.sqrt($tmp231);
        h = $tmp229 / $tmp230;
        j = 1;
        $tmp233 = j <= height;
        for (; $tmp233;) {
            var row, previousRow, $tmp241, prevValue, currentRow, nextValue, nextRow, $tmp242, i, $tmp244, $tmp232, $tmp233;
            row = j * rowSize;
            $tmp241 = j - 1;
            previousRow = $tmp241 * rowSize;
            prevValue = row - 1;
            currentRow = row;
            nextValue = row + 1;
            $tmp242 = j + 1;
            nextRow = $tmp242 * rowSize;
            i = 1;
            $tmp244 = i <= width;
            for (; $tmp244;) {
                var $tmp245, $tmp246, $tmp247, $tmp248, $tmp249, $tmp250, $tmp251, $tmp252, $tmp253, $tmp254, $tmp255, $tmp256, $tmp243, $tmp244;
                $tmp245 = ++currentRow;
                $tmp250 = ++nextValue;
                $tmp249 = u[$tmp250];
                $tmp252 = ++prevValue;
                $tmp251 = u[$tmp252];
                $tmp248 = $tmp249 - $tmp251;
                $tmp254 = ++nextRow;
                $tmp253 = v[$tmp254];
                $tmp247 = $tmp248 + $tmp253;
                $tmp256 = ++previousRow;
                $tmp255 = v[$tmp256];
                $tmp246 = $tmp247 - $tmp255;
                div[$tmp245] = h * $tmp246;
                p[currentRow] = 0;
                $tmp243 = i++;
                $tmp244 = i <= width;
            }
            $tmp232 = j++;
            $tmp233 = j <= height;
        }
        $tmp234 = set_bnd(0, div);
        $tmp235 = set_bnd(0, p);
        $tmp236 = lin_solve(0, p, div, 1, 4);
        wScale = 0.5 * width;
        hScale = 0.5 * height;
        j = 1;
        $tmp238 = j <= height;
        for (; $tmp238;) {
            var prevPos, $tmp257, currentPos, nextPos, $tmp258, prevRow, $tmp259, currentRow, nextRow, $tmp260, i, $tmp262, $tmp237, $tmp238;
            $tmp257 = j * rowSize;
            prevPos = $tmp257 - 1;
            currentPos = j * rowSize;
            $tmp258 = j * rowSize;
            nextPos = $tmp258 + 1;
            $tmp259 = j - 1;
            prevRow = $tmp259 * rowSize;
            currentRow = j * rowSize;
            $tmp260 = j + 1;
            nextRow = $tmp260 * rowSize;
            i = 1;
            $tmp262 = i <= width;
            for (; $tmp262;) {
                var $tmp263, $tmp264, $tmp265, $tmp266, $tmp267, $tmp268, $tmp269, $tmp270, $tmp271, $tmp272, $tmp273, $tmp261, $tmp262;
                $tmp263 = ++currentPos;
                $tmp266 = ++nextPos;
                $tmp265 = p[$tmp266];
                $tmp268 = ++prevPos;
                $tmp267 = p[$tmp268];
                $tmp264 = $tmp265 - $tmp267;
                u[$tmp263] -= wScale * $tmp264;
                $tmp271 = ++nextRow;
                $tmp270 = p[$tmp271];
                $tmp273 = ++prevRow;
                $tmp272 = p[$tmp273];
                $tmp269 = $tmp270 - $tmp272;
                v[currentPos] -= hScale * $tmp269;
                $tmp261 = i++;
                $tmp262 = i <= width;
            }
            $tmp237 = j++;
            $tmp238 = j <= height;
        }
        $tmp239 = set_bnd(1, u);
        $tmp240 = set_bnd(2, v);
    }
    function dens_step(x, x0, u, v, dt) {
        var $tmp274, $tmp275, $tmp276;
        $tmp274 = addFields(x, x0, dt);
        $tmp275 = diffuse(0, x0, x, dt);
        $tmp276 = advect(0, x, x0, u, v, dt);
    }
    function vel_step(u, v, u0, v0, dt) {
        var $tmp277, $tmp278, temp, temp, $tmp279, $tmp280, temp, temp, $tmp281, $tmp282, $tmp283;
        $tmp277 = addFields(u, u0, dt);
        $tmp278 = addFields(v, v0, dt);
        temp = u0;
        u0 = u;
        u = temp;
        temp = v0;
        v0 = v;
        v = temp;
        $tmp279 = diffuse2(u, u0, v, v0, dt);
        $tmp280 = project(u, v, u0, v0);
        temp = u0;
        u0 = u;
        u = temp;
        temp = v0;
        v0 = v;
        v = temp;
        $tmp281 = advect(1, u, u0, u0, v0, dt);
        $tmp282 = advect(2, v, v0, u0, v0, dt);
        $tmp283 = project(u, v, u0, v0);
    }
    var uiCallback, $tmp29, $tmp30, $tmp31, $tmp32, $tmp33, iterations, visc, dt, dens, dens_prev, u, u_prev, v, v_prev, width, height, rowSize, size, displayFunc, $tmp34, $tmp35, $tmp36, $tmp37;
    uiCallback = function (d, u, v) {
    };
    function Field(dens, u, v) {
        var $tmp284, $tmp285, $tmp286, $tmp287, $tmp288, $tmp289, $tmp290;
        $tmp284 = this;
        $tmp284.setDensity = function (x, y, d) {
            var $tmp291, $tmp292, $tmp293, $tmp294;
            $tmp292 = x + 1;
            $tmp294 = y + 1;
            $tmp293 = $tmp294 * rowSize;
            $tmp291 = $tmp292 + $tmp293;
            dens[$tmp291] = d;
        };
        $tmp285 = this;
        $tmp285.getDensity = function (x, y) {
            var $tmp295, $tmp296, $tmp297, $tmp298, $tmp299;
            $tmp297 = x + 1;
            $tmp299 = y + 1;
            $tmp298 = $tmp299 * rowSize;
            $tmp296 = $tmp297 + $tmp298;
            $tmp295 = dens[$tmp296];
            return $tmp295;
        };
        $tmp286 = this;
        $tmp286.setVelocity = function (x, y, xv, yv) {
            var $tmp300, $tmp301, $tmp302, $tmp303, $tmp304, $tmp305, $tmp306, $tmp307;
            $tmp301 = x + 1;
            $tmp303 = y + 1;
            $tmp302 = $tmp303 * rowSize;
            $tmp300 = $tmp301 + $tmp302;
            u[$tmp300] = xv;
            $tmp305 = x + 1;
            $tmp307 = y + 1;
            $tmp306 = $tmp307 * rowSize;
            $tmp304 = $tmp305 + $tmp306;
            v[$tmp304] = yv;
        };
        $tmp287 = this;
        $tmp287.getXVelocity = function (x, y) {
            var $tmp308, $tmp309, $tmp310, $tmp311, $tmp312;
            $tmp310 = x + 1;
            $tmp312 = y + 1;
            $tmp311 = $tmp312 * rowSize;
            $tmp309 = $tmp310 + $tmp311;
            $tmp308 = u[$tmp309];
            return $tmp308;
        };
        $tmp288 = this;
        $tmp288.getYVelocity = function (x, y) {
            var $tmp313, $tmp314, $tmp315, $tmp316, $tmp317;
            $tmp315 = x + 1;
            $tmp317 = y + 1;
            $tmp316 = $tmp317 * rowSize;
            $tmp314 = $tmp315 + $tmp316;
            $tmp313 = v[$tmp314];
            return $tmp313;
        };
        $tmp289 = this;
        $tmp289.width = function () {
            return width;
        };
        $tmp290 = this;
        $tmp290.height = function () {
            return height;
        };
    }
    function queryUI(d, u, v) {
        var i, $tmp319, $tmp320, $tmp321;
        i = 0;
        $tmp319 = i < size;
        for (; $tmp319;) {
            d[i] = 0;
            v[i] = d[i];
            u[i] = v[i];
            var $tmp318, $tmp319;
            $tmp318 = i++;
            $tmp319 = i < size;
        }
        $tmp321 = new Field(d, u, v);
        $tmp320 = uiCallback($tmp321);
    }
    $tmp29 = this;
    $tmp29.update = function () {
        var $tmp322, $tmp323, $tmp324, $tmp325, $tmp326;
        $tmp322 = queryUI(dens_prev, u_prev, v_prev);
        $tmp323 = vel_step(u, v, u_prev, v_prev, dt);
        $tmp324 = dens_step(dens, dens_prev, u, v, dt);
        $tmp326 = new Field(dens, u, v);
        $tmp325 = displayFunc($tmp326);
    };
    $tmp30 = this;
    $tmp30.setDisplayFunction = function (func) {
        displayFunc = func;
    };
    $tmp31 = this;
    $tmp31.iterations = function () {
        return iterations;
    };
    $tmp32 = this;
    $tmp32.setIterations = function (iters) {
        var $tmp327;
        $tmp327 = iters > 0 && iters <= 100;
        if ($tmp327) {
            iterations = iters;
        } else {
        }
    };
    $tmp33 = this;
    $tmp33.setUICallback = function (callback) {
        uiCallback = callback;
    };
    iterations = 10;
    visc = 0.5;
    dt = 0.1;
    function reset() {
        rowSize = width + 2;
        var $tmp328, $tmp329, i, $tmp331;
        $tmp328 = width + 2;
        $tmp329 = height + 2;
        size = $tmp328 * $tmp329;
        dens = new Array(size);
        dens_prev = new Array(size);
        u = new Array(size);
        u_prev = new Array(size);
        v = new Array(size);
        v_prev = new Array(size);
        i = 0;
        $tmp331 = i < size;
        for (; $tmp331;) {
            v[i] = 0;
            u[i] = v[i];
            dens[i] = u[i];
            v_prev[i] = dens[i];
            u_prev[i] = v_prev[i];
            dens_prev[i] = u_prev[i];
            var $tmp330, $tmp331;
            $tmp330 = i++;
            $tmp331 = i < size;
        }
    }
    $tmp34 = this;
    $tmp34.reset = reset;
    $tmp35 = this;
    $tmp35.setResolution = function (hRes, wRes) {
        var res, $tmp332;
        res = wRes * hRes;
        $tmp332 = res > 0 && res < 1000000 && (wRes != width || hRes != height);
        if ($tmp332) {
            width = wRes;
            height = hRes;
            var $tmp333;
            $tmp333 = reset();
            return true;
        } else {
        }
        return false;
    };
    $tmp37 = this;
    $tmp36 = $tmp37.setResolution(64, 64);
}

setupNavierStokes();
runNavierStokes();
tearDownNavierStokes();
var print = print || console.log;
print('NavierStokes Done.');