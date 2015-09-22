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
            var $tmp301;
            $tmp301 = b === 2;
            if ($tmp301) {
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
                        lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[++currentRow] + x[++lastRow] + x[++nextRow])) * invC;
                        var $tmp140, $tmp141;
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
        var a, $tmp142, $tmp143, $tmp144;
        a = 0;
        $tmp144 = 4 * a;
        $tmp143 = 1 + $tmp144;
        $tmp142 = lin_solve(b, x, x0, a, $tmp143);
    }
    function lin_solve2(x, x0, y, y0, a, c) {
        var $tmp145;
        $tmp145 = a === 0 && c === 1;
        if ($tmp145) {
            var j, $tmp147, $tmp148, $tmp149;
            j = 1;
            $tmp147 = j <= height;
            for (; $tmp147;) {
                var currentRow, $tmp150, i, $tmp152, $tmp146, $tmp147;
                currentRow = j * rowSize;
                $tmp150 = ++currentRow;
                i = 0;
                $tmp152 = i < width;
                for (; $tmp152;) {
                    x[currentRow] = x0[currentRow];
                    y[currentRow] = y0[currentRow];
                    var $tmp153, $tmp151, $tmp152;
                    $tmp153 = ++currentRow;
                    $tmp151 = i++;
                    $tmp152 = i < width;
                }
                $tmp146 = j++;
                $tmp147 = j <= height;
            }
            $tmp148 = set_bnd(1, x);
            $tmp149 = set_bnd(2, y);
        } else {
            var invC, k, $tmp155;
            invC = 1 / c;
            k = 0;
            $tmp155 = k < iterations;
            for (; $tmp155;) {
                var j, $tmp157, $tmp158, $tmp159, $tmp154, $tmp155;
                j = 1;
                $tmp157 = j <= height;
                for (; $tmp157;) {
                    var lastRow, $tmp160, currentRow, nextRow, $tmp161, lastX, lastY, $tmp162, i, $tmp164, $tmp156, $tmp157;
                    $tmp160 = j - 1;
                    lastRow = $tmp160 * rowSize;
                    currentRow = j * rowSize;
                    $tmp161 = j + 1;
                    nextRow = $tmp161 * rowSize;
                    lastX = x[currentRow];
                    lastY = y[currentRow];
                    $tmp162 = ++currentRow;
                    i = 1;
                    $tmp164 = i <= width;
                    for (; $tmp164;) {
                        lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[currentRow] + x[lastRow] + x[nextRow])) * invC;
                        lastY = y[currentRow] = (y0[currentRow] + a * (lastY + y[++currentRow] + y[++lastRow] + y[++nextRow])) * invC;
                        var $tmp163, $tmp164;
                        $tmp163 = i++;
                        $tmp164 = i <= width;
                    }
                    $tmp156 = j++;
                    $tmp157 = j <= height;
                }
                $tmp158 = set_bnd(1, x);
                $tmp159 = set_bnd(2, y);
                $tmp154 = k++;
                $tmp155 = k < iterations;
            }
        }
    }
    function diffuse2(x, x0, y, y0, dt) {
        var a, $tmp165, $tmp166, $tmp167;
        a = 0;
        $tmp167 = 4 * a;
        $tmp166 = 1 + $tmp167;
        $tmp165 = lin_solve2(x, x0, y, y0, a, $tmp166);
    }
    function advect(b, d, d0, u, v, dt) {
        var Wdt0, Hdt0, Wp5, Hp5, j, $tmp169, $tmp170;
        Wdt0 = dt * width;
        Hdt0 = dt * height;
        Wp5 = width + 0.5;
        Hp5 = height + 0.5;
        j = 1;
        $tmp169 = j <= height;
        for (; $tmp169;) {
            var pos, i, $tmp172, $tmp168, $tmp169;
            pos = j * rowSize;
            i = 1;
            $tmp172 = i <= width;
            for (; $tmp172;) {
                var x, $tmp173, $tmp174, $tmp175, y, $tmp176, $tmp177, $tmp178, i0, i1, $tmp179, j0, j1, s1, s0, t1, t0, row1, row2, $tmp180, $tmp181, $tmp182, $tmp183, $tmp184, $tmp185, $tmp186, $tmp187, $tmp188, $tmp189, $tmp190, $tmp191, $tmp192, $tmp193, $tmp194, $tmp195, $tmp171, $tmp172;
                $tmp175 = ++pos;
                $tmp174 = u[$tmp175];
                $tmp173 = Wdt0 * $tmp174;
                x = i - $tmp173;
                $tmp177 = v[pos];
                $tmp176 = Hdt0 * $tmp177;
                y = j - $tmp176;
                $tmp178 = x < 0.5;
                if ($tmp178) {
                    x = 0.5;
                } else {
                    var $tmp302;
                    $tmp302 = x > Wp5;
                    if ($tmp302) {
                        x = Wp5;
                    } else {
                    }
                }
                i0 = x | 0;
                i1 = i0 + 1;
                $tmp179 = y < 0.5;
                if ($tmp179) {
                    y = 0.5;
                } else {
                    var $tmp303;
                    $tmp303 = y > Hp5;
                    if ($tmp303) {
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
                $tmp184 = i0 + row1;
                $tmp183 = d0[$tmp184];
                $tmp182 = t0 * $tmp183;
                $tmp187 = i0 + row2;
                $tmp186 = d0[$tmp187];
                $tmp185 = t1 * $tmp186;
                $tmp181 = $tmp182 + $tmp185;
                $tmp180 = s0 * $tmp181;
                $tmp192 = i1 + row1;
                $tmp191 = d0[$tmp192];
                $tmp190 = t0 * $tmp191;
                $tmp195 = i1 + row2;
                $tmp194 = d0[$tmp195];
                $tmp193 = t1 * $tmp194;
                $tmp189 = $tmp190 + $tmp193;
                $tmp188 = s1 * $tmp189;
                d[pos] = $tmp180 + $tmp188;
                $tmp171 = i++;
                $tmp172 = i <= width;
            }
            $tmp168 = j++;
            $tmp169 = j <= height;
        }
        $tmp170 = set_bnd(b, d);
    }
    function project(u, v, p, div) {
        var h, $tmp196, $tmp197, $tmp198, j, $tmp200, $tmp201, $tmp202, $tmp203, wScale, hScale, j, $tmp205, $tmp206, $tmp207;
        $tmp196 = -0.5;
        $tmp198 = width * height;
        $tmp197 = Math.sqrt($tmp198);
        h = $tmp196 / $tmp197;
        j = 1;
        $tmp200 = j <= height;
        for (; $tmp200;) {
            var row, previousRow, $tmp208, prevValue, currentRow, nextValue, nextRow, $tmp209, i, $tmp211, $tmp199, $tmp200;
            row = j * rowSize;
            $tmp208 = j - 1;
            previousRow = $tmp208 * rowSize;
            prevValue = row - 1;
            currentRow = row;
            nextValue = row + 1;
            $tmp209 = j + 1;
            nextRow = $tmp209 * rowSize;
            i = 1;
            $tmp211 = i <= width;
            for (; $tmp211;) {
                var $tmp212, $tmp213, $tmp214, $tmp215, $tmp216, $tmp217, $tmp218, $tmp219, $tmp220, $tmp221, $tmp222, $tmp223, $tmp210, $tmp211;
                $tmp212 = ++currentRow;
                $tmp217 = ++nextValue;
                $tmp216 = u[$tmp217];
                $tmp219 = ++prevValue;
                $tmp218 = u[$tmp219];
                $tmp215 = $tmp216 - $tmp218;
                $tmp221 = ++nextRow;
                $tmp220 = v[$tmp221];
                $tmp214 = $tmp215 + $tmp220;
                $tmp223 = ++previousRow;
                $tmp222 = v[$tmp223];
                $tmp213 = $tmp214 - $tmp222;
                div[$tmp212] = h * $tmp213;
                p[currentRow] = 0;
                $tmp210 = i++;
                $tmp211 = i <= width;
            }
            $tmp199 = j++;
            $tmp200 = j <= height;
        }
        $tmp201 = set_bnd(0, div);
        $tmp202 = set_bnd(0, p);
        $tmp203 = lin_solve(0, p, div, 1, 4);
        wScale = 0.5 * width;
        hScale = 0.5 * height;
        j = 1;
        $tmp205 = j <= height;
        for (; $tmp205;) {
            var prevPos, $tmp224, currentPos, nextPos, $tmp225, prevRow, $tmp226, currentRow, nextRow, $tmp227, i, $tmp229, $tmp204, $tmp205;
            $tmp224 = j * rowSize;
            prevPos = $tmp224 - 1;
            currentPos = j * rowSize;
            $tmp225 = j * rowSize;
            nextPos = $tmp225 + 1;
            $tmp226 = j - 1;
            prevRow = $tmp226 * rowSize;
            currentRow = j * rowSize;
            $tmp227 = j + 1;
            nextRow = $tmp227 * rowSize;
            i = 1;
            $tmp229 = i <= width;
            for (; $tmp229;) {
                var $tmp230, $tmp231, $tmp232, $tmp233, $tmp234, $tmp235, $tmp236, $tmp237, $tmp238, $tmp239, $tmp240, $tmp228, $tmp229;
                $tmp230 = ++currentPos;
                $tmp233 = ++nextPos;
                $tmp232 = p[$tmp233];
                $tmp235 = ++prevPos;
                $tmp234 = p[$tmp235];
                $tmp231 = $tmp232 - $tmp234;
                u[$tmp230] -= wScale * $tmp231;
                $tmp238 = ++nextRow;
                $tmp237 = p[$tmp238];
                $tmp240 = ++prevRow;
                $tmp239 = p[$tmp240];
                $tmp236 = $tmp237 - $tmp239;
                v[currentPos] -= hScale * $tmp236;
                $tmp228 = i++;
                $tmp229 = i <= width;
            }
            $tmp204 = j++;
            $tmp205 = j <= height;
        }
        $tmp206 = set_bnd(1, u);
        $tmp207 = set_bnd(2, v);
    }
    function dens_step(x, x0, u, v, dt) {
        var $tmp241, $tmp242, $tmp243;
        $tmp241 = addFields(x, x0, dt);
        $tmp242 = diffuse(0, x0, x, dt);
        $tmp243 = advect(0, x, x0, u, v, dt);
    }
    function vel_step(u, v, u0, v0, dt) {
        var $tmp244, $tmp245, temp, temp, $tmp246, $tmp247, temp, temp, $tmp248, $tmp249, $tmp250;
        $tmp244 = addFields(u, u0, dt);
        $tmp245 = addFields(v, v0, dt);
        temp = u0;
        u0 = u;
        u = temp;
        temp = v0;
        v0 = v;
        v = temp;
        $tmp246 = diffuse2(u, u0, v, v0, dt);
        $tmp247 = project(u, v, u0, v0);
        temp = u0;
        u0 = u;
        u = temp;
        temp = v0;
        v0 = v;
        v = temp;
        $tmp248 = advect(1, u, u0, u0, v0, dt);
        $tmp249 = advect(2, v, v0, u0, v0, dt);
        $tmp250 = project(u, v, u0, v0);
    }
    var uiCallback, $tmp29, $tmp30, $tmp31, $tmp32, $tmp33, iterations, visc, dt, dens, dens_prev, u, u_prev, v, v_prev, width, height, rowSize, size, displayFunc, $tmp34, $tmp35, $tmp36, $tmp37;
    uiCallback = function (d, u, v) {
    };
    function Field(dens, u, v) {
        var $tmp251, $tmp252, $tmp253, $tmp254, $tmp255, $tmp256, $tmp257;
        $tmp251 = this;
        $tmp251.setDensity = function (x, y, d) {
            var $tmp258, $tmp259, $tmp260, $tmp261;
            $tmp259 = x + 1;
            $tmp261 = y + 1;
            $tmp260 = $tmp261 * rowSize;
            $tmp258 = $tmp259 + $tmp260;
            dens[$tmp258] = d;
        };
        $tmp252 = this;
        $tmp252.getDensity = function (x, y) {
            var $tmp262, $tmp263, $tmp264, $tmp265, $tmp266;
            $tmp264 = x + 1;
            $tmp266 = y + 1;
            $tmp265 = $tmp266 * rowSize;
            $tmp263 = $tmp264 + $tmp265;
            $tmp262 = dens[$tmp263];
            return $tmp262;
        };
        $tmp253 = this;
        $tmp253.setVelocity = function (x, y, xv, yv) {
            var $tmp267, $tmp268, $tmp269, $tmp270, $tmp271, $tmp272, $tmp273, $tmp274;
            $tmp268 = x + 1;
            $tmp270 = y + 1;
            $tmp269 = $tmp270 * rowSize;
            $tmp267 = $tmp268 + $tmp269;
            u[$tmp267] = xv;
            $tmp272 = x + 1;
            $tmp274 = y + 1;
            $tmp273 = $tmp274 * rowSize;
            $tmp271 = $tmp272 + $tmp273;
            v[$tmp271] = yv;
        };
        $tmp254 = this;
        $tmp254.getXVelocity = function (x, y) {
            var $tmp275, $tmp276, $tmp277, $tmp278, $tmp279;
            $tmp277 = x + 1;
            $tmp279 = y + 1;
            $tmp278 = $tmp279 * rowSize;
            $tmp276 = $tmp277 + $tmp278;
            $tmp275 = u[$tmp276];
            return $tmp275;
        };
        $tmp255 = this;
        $tmp255.getYVelocity = function (x, y) {
            var $tmp280, $tmp281, $tmp282, $tmp283, $tmp284;
            $tmp282 = x + 1;
            $tmp284 = y + 1;
            $tmp283 = $tmp284 * rowSize;
            $tmp281 = $tmp282 + $tmp283;
            $tmp280 = v[$tmp281];
            return $tmp280;
        };
        $tmp256 = this;
        $tmp256.width = function () {
            return width;
        };
        $tmp257 = this;
        $tmp257.height = function () {
            return height;
        };
    }
    function queryUI(d, u, v) {
        var i, $tmp286, $tmp287, $tmp288;
        i = 0;
        $tmp286 = i < size;
        for (; $tmp286;) {
            u[i] = v[i] = d[i] = 0;
            var $tmp285, $tmp286;
            $tmp285 = i++;
            $tmp286 = i < size;
        }
        $tmp288 = new Field(d, u, v);
        $tmp287 = uiCallback($tmp288);
    }
    $tmp29 = this;
    $tmp29.update = function () {
        var $tmp289, $tmp290, $tmp291, $tmp292, $tmp293;
        $tmp289 = queryUI(dens_prev, u_prev, v_prev);
        $tmp290 = vel_step(u, v, u_prev, v_prev, dt);
        $tmp291 = dens_step(dens, dens_prev, u, v, dt);
        $tmp293 = new Field(dens, u, v);
        $tmp292 = displayFunc($tmp293);
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
        var $tmp294;
        $tmp294 = iters > 0 && iters <= 100;
        if ($tmp294) {
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
        var $tmp295, $tmp296, i, $tmp298;
        $tmp295 = width + 2;
        $tmp296 = height + 2;
        size = $tmp295 * $tmp296;
        dens = new Array(size);
        dens_prev = new Array(size);
        u = new Array(size);
        u_prev = new Array(size);
        v = new Array(size);
        v_prev = new Array(size);
        i = 0;
        $tmp298 = i < size;
        for (; $tmp298;) {
            dens_prev[i] = u_prev[i] = v_prev[i] = dens[i] = u[i] = v[i] = 0;
            var $tmp297, $tmp298;
            $tmp297 = i++;
            $tmp298 = i < size;
        }
    }
    $tmp34 = this;
    $tmp34.reset = reset;
    $tmp35 = this;
    $tmp35.setResolution = function (hRes, wRes) {
        var res, $tmp299;
        res = wRes * hRes;
        $tmp299 = res > 0 && res < 1000000 && (wRes != width || hRes != height);
        if ($tmp299) {
            width = wRes;
            height = hRes;
            var $tmp300;
            $tmp300 = reset();
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