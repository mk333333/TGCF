
/* Bloqueo de clic derecho / menú contextual */
/* Sin seleccionar, copiar, cortar ni arrastrar texto fuera de las casillas */
['selectstart','copy','cut','dragstart'].forEach(function(n){document.addEventListener(n,function(e){if(e.target&&e.target.closest&&e.target.closest('input,textarea'))return;if(e.target&&e.target.nodeType===3&&e.target.parentElement&&e.target.parentElement.closest('input,textarea'))return;e.preventDefault()},true)});
document.addEventListener('contextmenu',function(e){if(e.target&&e.target.closest&&e.target.closest('input'))return;e.preventDefault();return false},true);
document.addEventListener('mousedown',function(e){if(e.button===2){e.preventDefault();return false}},true);
function band(a){return a<17?null:a<=25?0:a<=30?1:a<=35?2:a<=40?3:a<=45?4:a<=50?5:a<=55?6:a<=59?7:8}
const pushRows=[
[73,[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]],
[72,[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]],
[71,[99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]],
[70,[98,100,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]],
[69,[97,100,98,100,99,100,100,100,100,100,100,100,100,100,100,100,100,100]],
[68,[96,100,97,100,98,100,99,100,100,100,100,100,100,100,100,100,100,100]],
[67,[95,100,96,100,97,100,98,100,99,100,100,100,100,100,100,100,100,100]],
[66,[94,100,95,100,96,100,97,100,98,100,99,100,100,100,100,100,100,100]],
[65,[93,99,94,100,95,100,96,100,97,100,98,100,99,100,100,100,100,100]],
[64,[92,98,93,99,94,100,95,100,96,100,97,100,98,100,100,100,100,100]],
[63,[91,97,92,98,93,99,94,100,95,100,96,100,97,100,99,100,100,100]],
[62,[90,96,91,97,92,98,93,99,94,100,95,100,96,100,98,100,99,100]],
[61,[89,95,90,96,91,97,92,98,93,99,94,100,95,100,97,100,98,100]],
[60,[88,94,89,95,90,96,91,97,92,98,93,99,94,99,96,99,97,100]],
[59,[87,93,88,94,89,95,90,96,91,97,92,98,93,98,95,98,96,99]],
[58,[86,92,87,93,88,94,89,95,90,96,91,97,92,97,94,97,95,98]],
[57,[85,91,86,92,87,93,88,94,89,95,90,96,91,96,93,96,94,97]],
[56,[84,90,85,91,86,92,87,93,88,94,89,95,90,95,92,95,93,96]],
[55,[83,89,84,90,85,91,86,92,87,93,88,94,89,94,91,94,92,95]],
[54,[82,88,83,89,84,90,85,91,86,92,87,93,88,93,90,93,91,94]],
[53,[81,87,82,88,83,89,84,90,85,91,86,92,87,92,89,92,90,93]],
[52,[80,86,81,87,82,88,83,89,84,90,85,91,86,91,88,91,89,92]],
[51,[79,85,80,86,81,87,82,88,83,89,84,90,85,90,87,90,88,91]],
[50,[78,84,79,85,80,86,81,87,82,88,83,89,84,89,86,89,87,90]],
[49,[77,83,78,84,79,85,80,86,81,87,82,88,83,88,85,88,86,89]],
[48,[76,82,77,83,78,84,79,85,80,86,81,87,82,87,84,87,85,88]],
[47,[75,81,76,82,77,83,78,84,79,85,80,86,81,86,83,86,84,87]],
[46,[74,80,75,81,76,82,77,83,78,84,79,85,80,85,82,85,83,86]],
[45,[72,79,74,80,75,81,76,82,77,83,78,84,79,84,81,84,82,85]],
[44,[70,78,72,79,74,80,75,81,76,82,77,83,78,83,80,83,81,84]],
[43,[68,77,70,78,72,79,74,80,75,81,76,82,77,82,79,82,80,83]],
[42,[66,76,68,77,70,78,72,79,74,80,75,81,76,81,78,81,79,82]],
[41,[64,75,66,76,68,77,70,78,72,79,74,80,75,80,77,80,78,81]],
[40,[62,74,64,75,66,76,68,77,70,78,72,79,74,79,76,79,77,80]],
[39,[60,72,62,74,64,75,66,76,68,77,70,78,72,78,75,78,76,79]],
[38,[58,70,60,72,62,74,64,75,66,76,68,77,70,77,74,77,75,78]],
[37,[56,68,58,70,60,72,62,74,64,75,66,76,68,76,72,76,74,77]],
[36,[54,66,56,68,58,70,60,72,62,74,64,75,66,75,70,75,72,76]],
[35,[52,64,54,66,56,68,58,70,60,72,62,74,64,74,68,74,70,75]],
[34,[50,62,52,64,54,66,56,68,58,70,60,72,62,72,66,72,68,74]],
[33,[48,60,50,62,52,64,54,66,56,68,58,70,60,70,64,70,66,72]],
[32,[46,58,48,60,50,62,52,64,54,66,56,68,58,68,62,68,64,70]],
[31,[44,56,46,58,48,60,50,62,52,64,54,66,56,66,60,66,62,68]],
[30,[42,54,44,56,46,58,48,60,50,62,52,64,54,64,58,64,60,66]],
[29,[40,52,42,54,44,56,46,58,48,60,50,62,52,62,56,62,58,64]],
[28,[38,50,40,52,42,54,44,56,46,58,48,60,50,60,54,60,56,62]],
[27,[36,48,38,50,40,52,42,54,44,56,46,58,48,58,52,58,54,60]],
[26,[34,46,36,48,38,50,40,52,42,54,44,56,46,56,50,56,52,58]],
[25,[32,44,34,46,36,48,38,50,40,52,42,54,44,54,48,54,50,56]],
[24,[30,42,32,44,34,46,36,48,38,50,40,52,42,52,46,52,48,54]],
[23,[29,40,30,42,32,44,34,46,36,48,38,50,40,50,44,50,46,52]],
[22,[28,38,29,40,30,42,32,44,34,46,36,48,38,48,42,48,44,50]],
[21,[27,36,28,38,29,40,30,42,32,44,34,46,36,46,40,46,42,48]],
[20,[26,34,27,36,28,38,29,40,30,42,32,44,34,44,38,44,40,46]],
[19,[25,32,26,34,27,36,28,38,29,40,30,42,32,42,36,42,38,44]],
[18,[24,30,25,32,26,34,27,36,28,38,29,40,30,40,34,40,36,42]],
[17,[23,29,24,30,25,32,26,34,27,36,28,38,29,38,32,38,34,40]],
[16,[22,28,23,29,24,30,25,32,26,34,27,36,28,36,30,36,32,38]],
[15,[21,27,22,28,23,29,24,30,25,32,26,34,27,34,29,34,30,36]],
[14,[20,26,21,27,22,28,23,29,24,30,25,32,26,32,28,32,29,34]],
[13,[18,25,20,26,21,27,22,28,23,29,24,30,25,30,27,30,28,32]],
[12,[16,24,18,25,20,26,21,27,22,28,23,29,24,29,26,29,27,30]],
[11,[14,23,16,24,18,25,20,26,21,27,22,28,23,28,25,28,26,29]],
[10,[12,22,14,23,16,24,18,25,20,26,21,27,22,27,24,27,25,28]],
[9,[10,21,12,22,14,23,16,24,18,25,20,26,21,26,23,26,24,27]],
[8,[9,20,10,21,12,22,14,23,16,24,18,25,20,25,22,25,23,26]],
[7,[8,18,9,20,10,21,12,22,14,23,16,24,18,24,21,24,22,25]],
[6,[7,16,8,18,9,20,10,21,12,22,14,23,16,23,20,23,21,24]],
[5,[6,14,6,16,8,18,9,20,10,21,12,22,14,22,18,22,20,23]],
[4,[5,12,5,14,6,15,8,16,9,20,10,21,12,21,16,21,16,22]],
[3,[4,10,4,12,5,13,6,14,8,15,9,20,10,20,14,20,12,21]],
[2,[3,6,3,10,4,10,4,10,6,11,8,15,9,15,12,15,8,20]],
[1,[2,3,2,6,3,6,3,6,4,6,6,8,6,8,6,8,6,8]],
[0,[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
];
// plancha and run/agility are encoded as [mark, values by age band]; sex not applicable to plancha
const plankRows=`5:15 100 100 100 100 100 100 100 100 100
5:10 99 100 100 100 100 100 100 100 100
5:05 98 99 100 100 100 100 100 100 100
5:00 97 98 99 100 100 100 100 100 100
4:55 95 97 98 99 100 100 100 100 100
4:50 94 95 97 98 99 100 100 100 100
4:45 93 94 95 97 98 99 100 100 100
4:40 91 93 94 95 97 98 99 100 100
4:35 90 91 93 94 95 97 98 99 100
4:30 89 90 91 93 94 95 97 98 100
4:25 88 89 90 91 93 94 95 97 99
4:20 86 88 89 90 91 93 94 95 98
4:15 85 86 88 89 90 91 93 94 97
4:10 84 85 86 88 89 90 91 93 95
4:05 82 84 85 86 88 89 90 91 94
4:00 81 82 84 85 86 88 89 90 93
3:55 80 81 82 84 85 86 88 89 91
3:50 78 80 81 82 84 85 86 88 90
3:45 77 78 80 81 82 84 85 86 89
3:40 76 77 78 80 81 82 84 85 88
3:35 74 76 77 78 80 81 82 84 86
3:30 73 74 76 77 78 80 81 82 85
3:25 72 73 74 76 77 78 80 81 84
3:20 70 72 73 74 76 77 78 80 82
3:15 69 70 72 73 74 76 77 78 81
3:10 68 69 70 72 73 74 76 77 80
3:05 66 68 69 70 72 73 74 76 78
3:00 65 66 68 69 70 72 73 74 77
2:55 64 65 66 68 69 70 72 73 76
2:50 62 64 65 66 68 69 70 72 74
2:45 61 62 64 65 66 68 69 70 73
2:40 60 61 62 64 65 66 68 69 72
2:35 58 60 61 62 64 65 66 68 70
2:30 57 58 60 61 62 64 65 66 69
2:25 56 57 58 60 61 62 64 65 68
2:20 54 56 57 58 60 61 62 64 66
2:15 53 54 56 57 58 60 61 62 65
2:10 52 53 54 56 57 58 60 61 64
2:05 50 52 53 54 56 57 58 60 62
2:00 49 50 52 53 54 56 57 58 61
1:55 48 49 50 52 53 54 56 57 60
1:50 47 48 49 50 52 53 54 56 58
1:45 45 47 48 49 50 52 53 54 57
1:40 44 45 47 48 49 50 52 53 56
1:35 43 44 45 47 48 49 50 52 54
1:30 41 43 44 45 47 48 49 50 53
1:25 40 41 43 44 45 47 48 49 52
1:22 39 40 41 43 44 45 47 48 50
1:19 37 39 40 41 43 44 45 47 49
1:16 36 37 39 40 41 43 44 45 48
1:13 35 36 37 39 40 41 43 44 47
1:10 33 35 36 37 39 40 41 43 45
1:07 32 33 35 36 37 39 40 41 44
1:04 31 32 33 35 36 37 39 40 43
1:01 30 31 32 33 35 36 37 39 41
0:58 28 30 31 32 33 35 36 37 40
0:55 27 28 30 31 32 33 35 36 39
0:52 25 27 28 30 31 32 33 35 37
0:49 24 25 27 28 30 31 32 33 36
0:46 23 24 25 27 28 30 31 32 35
0:43 21 23 24 25 27 28 30 31 33
0:40 20 21 23 24 25 27 28 30 32
0:36 19 20 21 23 24 25 27 28 31
0:35 18 19 20 21 23 24 25 27 30
0:34 17 18 19 20 21 23 24 25 28
0:33 16 17 18 19 20 21 23 24 27
0:32 15 16 17 18 19 20 21 23 25
0:31 14 15 16 17 18 19 20 21 24
0:30 13 14 15 16 17 18 19 20 23
0:29 12 13 14 15 16 17 18 19 21
0:28 11 12 13 14 15 16 17 18 20
0:27 10 11 12 13 14 15 16 17 19
0:26 9 10 11 12 13 14 15 16 18
0:25 8 9 10 11 12 13 14 15 17
0:24 7 8 9 10 11 12 13 14 16
0:23 6 7 8 9 10 11 12 13 15
0:22 5 6 7 8 9 10 11 12 14
0:21 4 5 6 7 8 9 10 11 13
0:20 3 4 5 6 7 8 9 10 12
0:19 2 3 4 5 6 7 8 9 11
0:18 1 2 3 4 5 6 7 8 9
0:17 0 1 2 3 4 5 6 7 8
0:16 0 0 1 2 3 4 5 6 7
0:15 0 0 0 0 0 0 0 0 0`.split('\n').map(x=>{let a=x.split(' ');return [a[0],a.slice(1).map(Number)]});
const runRows=`06:26 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100
06:34 98 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100
06:42 96 100 98 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100
06:50 94 100 96 100 98 100 100 100 100 100 100 100 100 100 100 100 100 100
06:58 92 100 94 100 96 100 98 100 100 100 100 100 100 100 100 100 100 100
07:06 90 100 92 100 94 100 96 100 98 100 100 100 100 100 100 100 100 100
07:14 88 100 90 100 92 100 94 100 96 100 98 100 100 100 100 100 100 100
07:22 86 98 88 100 90 100 92 100 94 100 96 100 100 100 100 100 100 100
07:30 84 96 86 98 88 100 90 100 92 100 94 100 100 100 100 100 100 100
07:38 82 94 84 96 86 98 88 100 90 100 92 100 100 100 100 100 100 100
07:46 80 92 82 94 84 96 86 100 88 100 90 100 100 100 100 100 100 100
07:54 78 90 80 92 82 94 84 98 86 100 88 100 98 100 100 100 100 100
08:02 76 88 78 90 80 92 82 96 84 100 86 100 96 100 100 100 100 100
08:10 74 86 76 88 78 90 80 94 82 98 84 100 94 100 100 100 100 100
08:18 72 84 74 86 76 88 78 92 80 96 82 100 92 100 100 100 100 100
08:26 70 82 72 84 74 86 76 90 78 94 80 98 90 100 98 100 100 100
08:34 68 80 70 82 72 84 74 88 76 92 78 96 88 100 96 100 100 100
08:42 66 78 68 80 70 82 72 86 74 90 76 94 86 100 94 100 100 100
08:50 64 76 66 78 68 80 70 84 72 88 74 92 84 100 92 100 98 100
08:56 62 74 64 76 66 78 68 82 70 86 72 90 82 100 90 100 96 100
09:06 60 72 62 74 64 76 66 80 68 84 70 88 80 100 88 100 94 100
09:14 58 70 60 72 62 74 64 78 66 82 68 86 78 100 86 100 92 100
09:22 56 68 58 70 60 72 62 76 64 80 66 84 76 100 84 100 90 100
09:30 54 66 56 68 58 70 60 74 62 78 64 82 74 100 82 100 88 100
09:36 52 64 54 66 56 68 58 72 60 76 62 80 72 100 80 100 86 100
09:46 50 62 52 64 54 66 56 70 58 74 60 78 70 98 78 100 84 100
09:54 48 60 50 62 52 64 54 68 56 72 58 76 68 96 76 100 82 100
10:02 46 58 48 60 50 62 52 66 54 70 56 74 66 94 74 100 80 100
10:10 44 56 46 58 48 60 50 64 52 68 54 72 64 92 72 100 78 100
10:18 42 54 44 56 46 58 48 62 50 66 52 70 62 90 70 98 76 100
10:26 40 52 42 54 44 56 46 60 48 64 50 68 60 88 68 96 74 100
10:34 38 50 40 52 42 54 44 58 46 62 48 66 58 86 66 94 72 98
10:42 36 48 38 50 40 52 42 56 44 60 46 64 56 84 64 92 70 96
10:50 34 46 36 48 38 50 40 54 42 58 44 62 54 82 62 90 68 94
10:56 32 44 34 46 36 48 38 52 40 56 42 60 52 80 60 88 66 92
11:06 30 42 32 44 34 46 36 50 38 54 40 58 50 78 58 86 64 90
11:14 28 40 30 42 32 44 34 48 36 52 38 56 48 76 56 84 62 88
11:22 26 38 28 40 30 42 32 46 34 50 36 54 46 74 54 82 60 86
11:30 24 36 26 38 28 40 30 44 32 48 34 52 44 72 52 80 58 84
11:38 22 34 24 36 26 38 28 42 30 46 32 50 42 70 50 78 56 82
11:46 20 32 22 34 24 36 26 40 28 44 30 48 40 68 48 76 54 80
11:54 19 30 20 32 22 34 24 38 26 42 28 46 38 66 46 74 52 78
12:02 18 28 19 30 20 32 22 36 24 40 26 44 36 64 44 72 50 76
12:10 17 26 18 28 19 30 20 34 22 38 24 42 34 62 42 70 48 74
12:18 16 24 17 26 18 28 19 32 20 36 22 40 32 60 40 68 46 72
12:26 15 22 16 24 17 26 18 30 19 34 20 38 30 58 38 66 44 70
12:34 14 20 15 22 16 24 17 28 18 32 20 36 28 56 36 64 42 68
12:42 13 19 14 20 15 22 16 26 17 30 19 34 26 54 34 62 40 66
12:50 12 18 13 19 14 20 15 24 16 28 18 32 24 52 32 60 38 64
12:58 11 17 12 18 13 19 14 22 15 26 17 30 22 50 30 58 36 62
13:06 10 16 11 17 12 18 13 20 14 24 16 28 20 48 28 56 34 60
13:14 9 15 10 16 11 17 12 19 13 22 15 26 20 46 26 54 32 58
13:22 8 14 9 15 10 16 11 18 12 20 14 24 19 44 24 52 30 56
13:30 7 13 8 14 9 15 10 17 11 19 13 22 18 42 22 50 28 54
13:38 6 12 7 13 8 14 9 16 10 18 12 20 17 40 20 48 26 52
13:46 5 11 6 12 7 13 8 15 9 17 11 19 16 38 20 46 24 50
13:54 4 10 5 11 6 12 7 14 8 16 10 18 15 36 19 44 22 48
14:02 3 9 4 10 5 11 6 13 7 15 9 17 14 34 18 42 20 46
14:10 2 8 3 9 4 10 5 12 6 14 8 16 13 32 17 40 19 44
14:18 1 7 2 8 3 9 4 11 5 13 7 15 12 30 16 38 18 42
14:26 0 6 1 7 2 8 3 10 4 12 6 14 11 28 15 36 17 40
14:34 0 5 0 6 1 7 2 9 3 11 5 13 10 26 14 34 16 38
14:42 0 4 0 5 0 6 1 8 2 10 4 12 8 24 13 32 15 36
14:50 0 3 0 4 0 5 0 7 1 9 3 11 6 22 12 30 14 34
14:58 0 2 0 3 0 4 0 6 0 8 2 10 4 20 11 28 13 32
15:06 0 1 0 2 0 3 0 5 0 7 1 9 3 18 10 26 12 30
15:14 0 0 0 1 0 2 0 4 0 6 0 8 2 16 6 24 11 28
16:22 0 0 0 1 0 1 0 3 0 5 0 7 1 14 3 22 10 26
16:30 0 0 0 0 0 2 0 2 0 4 0 6 0 12 2 20 4 24
16:38 0 0 0 0 0 1 0 1 0 3 0 5 0 10 1 14 3 22
16:46 0 0 0 0 0 0 0 1 0 2 0 4 0 4 0 6 2 20
16:54 0 0 0 0 0 0 0 0 0 1 0 3 0 3 0 4 1 14
16:02 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`.split('\n').map(x=>{let a=x.split(' ');return [a[0],a.slice(1).map(Number)]});
const agilRows=`11.6 100 100 100 100 100 100 100 100 100 100
11.7 100 100 100 100 100 100 100 100 100 100
11.8 100 100 100 100 100 100 100 100 100 100
11.9 99 100 100 100 100 100 100 100 100 100
12 97 100 100 100 100 100 100 100 100 100
12.1 95 100 99 100 100 100 100 100 100 100
12.2 93 100 97 100 100 100 100 100 100 100
12.3 91 100 95 100 99 100 100 100 100 100
12.4 89 100 93 100 97 100 100 100 100 100
12.5 86 100 91 100 95 100 99 100 100 100
12.6 83 100 89 100 93 100 97 100 100 100
12.7 80 100 86 100 91 100 95 100 100 100
12.8 77 98 83 100 89 100 93 100 100 100
12.9 74 96 80 100 86 100 91 100 99 100
13 72 94 77 98 83 100 89 100 97 100
13.1 71 92 74 96 80 100 86 100 95 100
13.2 68 90 72 94 77 98 83 100 93 100
13.3 65 88 71 92 74 96 80 100 91 100
13.4 62 86 68 90 72 94 77 98 89 100
13.5 59 84 65 88 71 92 74 96 86 100
13.6 56 82 62 86 68 90 72 94 83 98
13.7 53 80 59 84 65 88 71 92 80 96
13.8 50 78 56 82 62 86 68 90 77 100
13.9 48 76 53 80 59 84 65 88 74 98
14 46 74 50 78 56 82 62 86 72 96
14.1 43 72 48 76 53 80 59 84 71 94
14.2 40 70 46 74 50 78 56 82 68 92
14.3 38 68 43 72 48 76 53 80 65 90
14.4 36 66 40 70 46 74 50 78 62 88
14.5 34 64 38 68 43 72 48 76 59 86
14.6 32 62 36 66 40 70 46 74 56 84
14.7 30 60 34 64 38 68 43 72 53 82
14.8 28 58 32 62 36 66 40 70 50 80
14.9 26 56 30 60 34 64 38 68 48 78
15 24 54 28 58 32 62 36 66 46 76
15.1 22 52 26 56 30 60 34 64 43 74
15.2 20 50 24 54 28 58 32 62 40 72
15.3 19 48 22 52 26 56 30 60 38 70
15.4 18 46 20 50 24 54 28 58 36 68
15.5 17 44 19 48 22 52 26 56 34 66
15.6 16 42 18 46 20 50 24 54 32 64
15.7 15 40 17 44 19 48 22 52 30 62
15.8 14 38 16 42 18 46 20 50 28 60
15.9 13 36 15 40 17 44 19 48 26 58
16 12 34 14 38 16 42 18 46 24 56
16.1 11 32 13 36 15 40 17 44 22 54
16.2 10 30 12 34 14 38 16 42 20 52
16.3 9 28 11 32 13 36 15 40 19 50
16.4 8 26 10 30 12 34 14 38 18 48
16.5 7 24 9 28 11 32 13 36 17 46
16.6 6 22 8 26 10 30 12 34 16 44
16.7 5 20 7 24 9 28 11 32 15 42
16.8 4 19 6 22 8 26 10 30 14 40
16.9 3 18 5 20 7 24 9 28 13 38
17 2 17 4 19 6 22 8 26 12 36
17.1 1 16 3 18 5 20 7 24 11 34
17.2 0 15 2 17 4 19 6 22 10 32
17.3 0 14 1 16 3 18 5 20 7 30
17.4 0 13 0 15 2 17 4 19 6 28
17.5 0 12 0 14 1 16 3 18 5 26
17.6 0 11 0 13 0 15 2 17 4 24
17.7 0 10 0 12 0 14 1 16 3 22
17.8 0 9 0 11 0 13 0 15 2 20
17.9 0 8 0 10 0 12 0 14 1 19
18 0 7 0 9 0 11 0 13 0 18
18.1 0 6 0 8 0 10 0 12 0 17
18.2 0 5 0 7 0 9 0 11 0 16
18.3 0 4 0 6 0 8 0 10 0 15
18.4 0 3 0 5 0 7 0 9 0 14
18.5 0 2 0 4 0 6 0 8 0 10
18.6 0 1 0 3 0 5 0 7 0 9
18.7 0 0 0 2 0 4 0 6 0 8
18.8 0 0 0 1 0 3 0 5 0 7
18.9 0 0 0 0 0 2 0 4 0 6
19 0 0 0 0 0 0 0 0 0 0`.split('\n').map(x=>{let a=x.split(' ');return [parseFloat(a[0]),a.slice(1).map(Number)]});
/* ===== LÍMITES Y VALIDACIÓN (rango = primera y última marca del Anexo II) ===== */
const LIM={age:[17,65],push:[0,500],plank:[0,3599],run:[180,3599],agil:[5,60]};   /* límites de sentido común: fuera de tabla se puntúa 0 o 100 */
const LIM_TXT={age:'17–65 años',push:'0–500 rep.',plank:'0:00–59:59',run:'3:00–59:59',agil:'5,0–60,0 s'};
function inR(v,k){return !isNaN(v)&&v>=LIM[k][0]&&v<=LIM[k][1]}
function setErr(id,bad,key){
  const el=document.getElementById(id),w=el.parentElement;
  el.classList.toggle('bad',bad);
  let m=w.querySelector('.err');
  if(!m){m=document.createElement('div');m.className='err';m.setAttribute('role','alert');w.appendChild(m)}
  m.innerHTML='⚠ PARÁMETRO NO VÁLIDO<small>Rango: '+LIM_TXT[key]+'</small>';
  m.style.display=bad?'block':'none';
}
function banner(){return '<div class="err-banner" role="alert">⚠ PARÁMETRO NO VÁLIDO<small>Revisa los campos marcados en rojo.</small></div>'}
function intOk(el){return /^\d+$/.test(String(el.value).trim())}
function validateAge(id){const el=document.getElementById(id);const ok=intOk(el)&&inR(+el.value,'age');setErr(id,!ok,'age');return ok}
function validateSim(a,plv,runv,agv){
  let ok=validateAge('sage');
  const okP=intOk(push)&&inR(+push.value,'push');setErr('push',!okP,'push');
  const okPl=inR(plv,'plank');setErr('plank',!okPl,'plank');
  const okR=inR(runv,'run');setErr('run',!okR,'run');
  const needAg=!(ok&&a>45);
  const okAg=needAg?inR(agv,'agil'):true;setErr('agil',!okAg,'agil');
  ok=ok&&okP&&okPl&&okR&&okAg;
  if(!ok)document.getElementById('simout').innerHTML=banner();
  return ok;
}
/* Separadores equivalentes: "." "," ":" se tratan igual */
function cleanInput(el){const v=el.value.replace(/[^0-9.,:]/g,'');if(v!==el.value)el.value=v}
function parseTime(s){
  s=String(s==null?'':s).replace(/\s+/g,'');
  if(!s)return NaN;
  const p=s.split(/[.,:]/);
  if(p.length===1)return /^\d+$/.test(p[0])?Number(p[0]):NaN;           /* solo número = segundos */
  if(p.length!==2||!/^\d+$/.test(p[0])||!/^\d*$/.test(p[1]))return NaN;
  const m=Number(p[0]),sec=p[1]===''?0:Number(p[1]);
  if(sec>59)return NaN;
  return m*60+sec;
}
function parseAgil(s){
  s=String(s==null?'':s).replace(/\s+/g,'');
  if(!/^\d+([.,:]\d*)?$/.test(s))return NaN;
  const v=Math.floor(Number(s.replace(/[,:]/,'.'))*10+1e-9)/10;
  return v>0?v:NaN;
}
function fmtMark(x){return isNaN(x)?'Formato no válido':fmtSec(x)}
function fmtAgil(x){return isNaN(x)?'Formato no válido':String(x).replace('.',',')+' s'}
function scorePush(x,a,s){let bi=band(a);if(bi===null)return 0;for(const r of pushRows){let v=r[1][bi*2+(s==='F'?1:0)];if(x>=r[0])return v}return 0}
function scorePlank(x,a){let bi=band(a);if(bi===null)return 0;for(const r of plankRows){if(x>=parseTime(r[0]))return r[1][bi]}return 0}
function scoreRun(x,a,s){let bi=band(a);if(bi===null)return 0;for(const r of runRows){let v=r[1][bi*2+(s==='F'?1:0)];if(x<=parseTime(r[0]))return v}return 0}
function scoreAgil(x,a,s){if(a>45)return null;let bi=band(a);if(bi===null)return 0;for(const r of agilRows){let v=r[1][bi*2+(s==='F'?1:0)];if(x<=r[0])return v}return 0}
function minMark(rows,a,s,kind){let bi=band(a);if(bi===null)return null;for(let i=rows.length-1;i>=0;i--){let r=rows[i];let idx=kind==='push'?bi*2+(s==='F'?1:0):(kind==='agil'||kind==='run')?bi*2+(s==='F'?1:0):bi;let v=r[1][idx];if(v>=20)return kind==='push'?r[0]:r[0]}return null}
function fmtSec(x){return Math.floor(x/60)+':'+String(Math.floor(x%60)).padStart(2,'0')}
function minimum(a,s){
let bp=band(a);if(bp===null)return '<p>Edad válida desde 17 años.</p>';
let p=minMark(pushRows,a,s,'push'), pl=minMark(plankRows,a,s,'plank'), ru=minMark(runRows,a,s,'run'), ag=a<=45?minMark(agilRows,a,s,'agil'):null;
document.getElementById('minout').innerHTML=`<table><tr><th>Prueba</th><th>Mínimo para 20 puntos</th><th>Puntos</th></tr>
<tr><td>Flexo-extensiones</td><td>${p} repeticiones</td><td>20</td></tr>
<tr><td>Plancha isométrica</td><td>${pl}</td><td>20</td></tr>
<tr><td>Carrera 2.000 m</td><td>${ru}</td><td>20</td></tr>
<tr><td>Circuito agilidad-velocidad</td><td>${ag===null?exSpan(s):String(ag).replace('.',',')+' s'}</td><td>${ag===null?'—':'20'}</td></tr></table>
<p class="small">Para ser «Apto» con carácter general se deben alcanzar al menos 20 puntos en cada prueba. La norma permite que se establezcan exigencias superiores en determinados destinos.${ag===null?' '+(s==='F'?'Exenta':'Exento')+' del circuito de agilidad-velocidad a partir de 46 años (el Anexo II no lo barema).':''}</p>`;
}
function polar(cx,cy,r,angle){let rad=(angle-90)*Math.PI/180;return [cx+r*Math.cos(rad),cy+r*Math.sin(rad)]}
function renderRadar(scores,sx){
  const labels=[['Fuerza',scores[0]],['Core',scores[1]],['Resist.',scores[2]],['Agilidad',scores[3]]];
  const cx=200,cy=175,R=120;
  const pts=[];
  for(let i=0;i<4;i++){let p=polar(cx,cy,R*(scores[i]/100),i*90);pts.push(p.join(','))}
  const full=[];for(let i=0;i<4;i++) full.push(polar(cx,cy,R,i*90).join(','));
  let grids='';
  [25,50,75,100].forEach(v=>{let gp=[];for(let i=0;i<4;i++)gp.push(polar(cx,cy,R*v/100,i*90).join(','));grids+=`<polygon class="radar-grid" points="${gp.join(' ')}"/>`;});
  let axes='';for(let i=0;i<4;i++){let p=polar(cx,cy,R,i*90);axes+=`<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}"/>`;}
  const pos=[{x:200,y:16,a:'middle'},{x:340,y:180,a:'start'},{x:200,y:336,a:'middle'},{x:60,y:180,a:'end'}];
  let txt='';for(let i=0;i<4;i++){let q=pos[i];txt+=`<text class="axis-label" x="${q.x}" y="${q.y}" text-anchor="${q.a}">${labels[i][0]}</text><text class="axis-value${labels[i][1]===null?' axis-exento':''}" x="${q.x}" y="${q.y+15}" text-anchor="${q.a}">${labels[i][1]===null?exTxt(sx):labels[i][1]}</text>`;}
  let dots=pts.map(p=>{let [x,y]=p.split(',');return `<circle class="radar-point" cx="${x}" cy="${y}" r="5"/>`;}).join('');
  return `<svg viewBox="0 0 400 360" role="img" aria-label="Gráfico de resultados TGCF"><g>${grids}${axes}<polygon class="radar-grid" points="${full.join(' ')}"/><polygon class="radar-fill" points="${pts.join(' ')}"/>${dots}${txt}</g></svg>`;
}
function simCalc(){
  let a=+sage.value,s=ssex.value;
  let plv=parseTime(plank.value),runv=parseTime(run.value),agv=parseAgil(agil.value);
  if(!validateSim(a,plv,runv,agv))return;
  let p=scorePush(+push.value,a,s),pl=scorePlank(plv,a),r=scoreRun(runv,a,s),ag=scoreAgil(agv,a,s);
  let vals=[p,pl,r].concat(ag===null?[]:[ag]);
  let apt=vals.every(x=>x>=20);
  let sexName=s==='F'?'Mujer':'Hombre';
  let below=vals.filter(x=>x<20).length;
  let stateText=apt?'TODAS LAS PRUEBAS SUPERADAS':(below+' PRUEBA'+(below===1?'':'S')+' POR DEBAJO DE 20 PUNTOS');
  document.getElementById('simout').innerHTML=`
  <div class="sim-result">
   <div class="radar-card">
    <div class="radar-head"><div><div class="radar-title">TGCF</div><div class="small">${a} años</div><div class="small">${sexName}</div></div></div>
    <div class="radar-wrap">${renderRadar([p,pl,r,ag],s)}</div>
    <div class="scoreline"><span class="status ${apt?'':'no'}">${apt?'✓ APTO':'✕ NO APTO'}</span></div>
   </div>
   <div class="sim-table">
    <div class="result-tag"><span>Resultado de evaluación</span><strong class="threshold">${stateText}</strong></div>
    <table><tr><th>Prueba</th><th>Marca</th><th>Puntos</th></tr>
     <tr><td>Flexo-extensiones</td><td>${push.value} rep.</td><td>${p}</td></tr>
     <tr><td>Plancha</td><td>${fmtMark(plv)}</td><td>${pl}</td></tr>
     <tr><td>2.000 m</td><td>${fmtMark(runv)}</td><td>${r}</td></tr>
     <tr><td>Agilidad-velocidad</td><td>${a>45?exSpan(s):fmtAgil(agv)}</td><td>${ag===null?'—':ag}</td></tr>
    </table>
    <div class="metric-cards">
     <div class="metric"><div class="metric-name">Fuerza</div><div class="metric-score">${p} <span style="font-size:.65rem;color:#68766d">PTS</span></div></div>
     <div class="metric"><div class="metric-name">Core</div><div class="metric-score">${pl} <span style="font-size:.65rem;color:#68766d">PTS</span></div></div>
     <div class="metric"><div class="metric-name">Resistencia</div><div class="metric-score">${r} <span style="font-size:.65rem;color:#68766d">PTS</span></div></div>
     <div class="metric"><div class="metric-name">Agilidad</div><div class="metric-score">${ag===null?exSpan(s):ag+' PTS'}</div></div>
    </div>
    <p class="small">${a>45?(s==='F'?'Exenta':'Exento')+' del circuito de agilidad-velocidad a partir de 46 años: el Anexo II no proporciona tabla y no se utiliza para el resultado.':'Umbral de aptitud: 20 puntos en cada prueba.'}</p>
   </div>
  </div>`;
}
function setSex(id,v,btn,fn){
  document.getElementById(id).value=v;
  btn.parentElement.querySelectorAll('.segbtn').forEach(function(b){const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-checked',on?'true':'false');b.tabIndex=on?0:-1});
  fn();
}
/* Simulación: al cambiar edad o sexo se cargan los mínimos (20 pts) y luego se pueden modificar */
function fillSimMins(){
  const a=+sage.value,sx=ssex.value;
  if(!(intOk(sage)&&inR(a,'age')))return;
  const p=minMark(pushRows,a,sx,'push'),pl=minMark(plankRows,a,sx,'plank'),ru=minMark(runRows,a,sx,'run'),ag=a<=45?minMark(agilRows,a,sx,'agil'):null;
  if(p!==null)push.value=String(p);
  if(pl!==null)plank.value=String(pl);
  if(ru!==null)run.value=String(ru);
  setExento(a>45||ag===null);
  if(!(a>45||ag===null))agil.value=String(ag).replace('.',',');
}
function exTxt(sx){return sx==='F'?'EXENTA':'EXENTO'}
function exSpan(sx){return '<span class="rojo">'+exTxt(sx)+'</span>'}
function setExento(on){
  agil.readOnly=on;agil.classList.toggle('exento',on);agil.setAttribute('aria-disabled',on?'true':'false');
  if(on){agil.value=exTxt(ssex.value);if(document.activeElement===agil)agil.blur()}
}
function simChange(){fillSimMins();simCalc()}
function minCalc(){if(!validateAge('mage')){document.getElementById('minout').innerHTML=banner();return}minimum(+mage.value,msex.value)}
function show(id,b){document.getElementById('min').style.display=id==='min'?'block':'none';document.getElementById('sim').style.display=id==='sim'?'block':'none';document.querySelectorAll('.tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false');x.tabIndex=-1});b.classList.add('active');b.setAttribute('aria-selected','true');b.tabIndex=0;if(id==='min')minCalc();else simCalc()}

/* ===== Táctil: mantener pulsado un instante y deslizar para subir/bajar valores =====
   Si el dedo se mueve antes de que se active, la página se desplaza con normalidad. */
(function(){
  const CFG={
    sage:{t:'int',min:17,max:65,def:41},mage:{t:'int',min:17,max:65,def:41},
    push:{t:'int',min:0,max:73,def:30},
    plank:{t:'time',min:0,max:315,def:150},run:{t:'time',min:386,max:1014,def:660},
    agil:{t:'dec',min:11.6,max:19,def:15}
  };
  const HOLD=260,PX=12,CANCEL=9;
  const clamp=(v,c)=>Math.min(c.max,Math.max(c.min,v));
  function read(el,c){
    let v;
    if(c.t==='time')v=parseTime(el.value);
    else if(c.t==='dec')v=parseAgil(el.value);
    else v=/^\d+$/.test(String(el.value).trim())?parseInt(el.value,10):NaN;
    return clamp(isNaN(v)?c.def:v,c);
  }
  function fmt(v,c){
    if(c.t==='time')return Math.floor(v/60)+':'+String(v%60).padStart(2,'0');
    if(c.t==='dec')return v.toFixed(1).replace('.',',');
    return String(v);
  }
  function vib(n){if(navigator.vibrate){try{navigator.vibrate(n)}catch(_){}}}
  Object.keys(CFG).forEach(function(id){
    const el=document.getElementById(id),c=CFG[id];
    if(!el)return;
    let st=null;
    function stop(){if(!st)return false;clearTimeout(st.timer);const was=st.armed;st=null;document.body.classList.remove('dragging');el.classList.remove('dragging');return was}
    el.addEventListener('touchstart',function(e){
      if(el.readOnly||e.touches.length!==1){stop();return}
      const t=e.touches[0];
      st={x:t.clientX,y:t.clientY,v:read(el,c),armed:false,last:null,timer:null};
      st.timer=setTimeout(function(){
        if(!st)return;
        st.armed=true;st.last=st.v;el.blur();                      /* sin teclado */
        document.body.classList.add('dragging');el.classList.add('dragging');vib(12);
      },HOLD);
    },{passive:true});
    el.addEventListener('touchmove',function(e){
      if(!st)return;
      const t=e.touches[0];
      if(!st.armed){                                               /* aún no activado: era un desplazamiento */
        if(Math.abs(t.clientY-st.y)>CANCEL||Math.abs(t.clientX-st.x)>CANCEL)stop();
        return;
      }
      e.preventDefault();                                          /* ya activado: la página no se mueve */
      const dy=st.y-t.clientY,d=Math.floor(Math.abs(dy)/PX);
      const steps=d+Math.floor(d*d/(c.t==='time'?14:70));          /* aceleración */
      const unit=c.t==='dec'?0.1:1;
      let nv=clamp(st.v+Math.sign(dy)*steps*unit,c);
      nv=c.t==='dec'?Math.round(nv*10)/10:Math.round(nv);
      if(nv!==st.last){
        st.last=nv;el.value=fmt(nv,c);
        el.dispatchEvent(new Event('input',{bubbles:true}));vib(3);
      }
    },{passive:false});
    function end(e){const was=stop();if(was){if(e.cancelable)e.preventDefault();el.blur()}}
    el.addEventListener('touchend',end);
    el.addEventListener('touchcancel',end);
  });

  /* Flechas ▲▼ en las cuatro marcas (se suman al toque y arrastre y al teclado) */
  ['push','plank','run','agil'].forEach(function(id){
    const el=document.getElementById(id),c=CFG[id];
    if(!el||el.closest('.stepwrap'))return;
    const w=document.createElement('div');w.className='stepwrap';
    el.parentNode.insertBefore(w,el);w.appendChild(el);
    const unit=c.t==='dec'?0.1:1;
    function bump(dir){
      let v=read(el,c)+dir*unit;v=clamp(c.t==='dec'?Math.round(v*10)/10:Math.round(v),c);
      el.value=fmt(v,c);el.dispatchEvent(new Event('input',{bubbles:true}));
    }
    const box=document.createElement('div');box.className='stepbtns';
    [['▲',1,'Subir'],['▼',-1,'Bajar']].forEach(function(d){
      const b=document.createElement('button');b.type='button';b.className='stepbtn';b.textContent=d[0];b.setAttribute('aria-label',d[2]);b.tabIndex=-1;
      let t1=null,t2=null;
      function off(){clearTimeout(t1);clearInterval(t2);t1=t2=null}
      b.addEventListener('pointerdown',function(e){e.preventDefault();bump(d[1]);off();t1=setTimeout(function(){t2=setInterval(function(){bump(d[1])},90)},420)});
      ['pointerup','pointerleave','pointercancel'].forEach(function(n){b.addEventListener(n,off)});
      b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();bump(d[1])}});
      box.appendChild(b);
    });
    w.appendChild(box);
  });
})();
/* ===== Teclado: flechas en pestañas y en los botones de sexo ===== */
(function(){
  function nav(group,sel,e){
    const k=e.key;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].indexOf(k)<0)return;
    const items=[].slice.call(group.querySelectorAll(sel));let i=items.indexOf(document.activeElement);if(i<0)return;
    if(k==='Home')i=0;else if(k==='End')i=items.length-1;else i=(i+(k==='ArrowLeft'||k==='ArrowUp'?-1:1)+items.length)%items.length;
    e.preventDefault();items[i].focus();items[i].click();
  }
  document.querySelectorAll('.tabs').forEach(function(g){g.addEventListener('keydown',function(e){nav(g,'.tab',e)})});
  document.querySelectorAll('.seg').forEach(function(g){g.addEventListener('keydown',function(e){nav(g,'.segbtn',e)})});
})();


/* ===== Modo claro / oscuro ===== */
function setTheme(t,save){
  t=t==='light'?'light':'dark';
  document.documentElement.setAttribute('data-theme',t);
  const tc=document.querySelector('meta[name=theme-color]');if(tc)tc.setAttribute('content',t==='light'?'#f2f5ef':'#070a09');
  const b=document.getElementById('themeBtn');
  if(b){
    b.textContent=t==='light'?'☀️':'🌙';                       /* muestra solo el emoji del modo actual */
    const msg=t==='light'?'Cambiar a modo oscuro':'Cambiar a modo claro';
    b.setAttribute('aria-label',msg);b.title=msg;
  }
  if(save!==false){try{localStorage.setItem('tgcf-theme',t)}catch(e){}}
}
function toggleTheme(){setTheme(document.documentElement.getAttribute('data-theme')==='light'?'dark':'light')}
setTheme(document.documentElement.getAttribute('data-theme'),false);
(function(){  /* si no hay elección guardada, seguir los cambios del sistema */
  if(!window.matchMedia)return;
  const mq=window.matchMedia('(prefers-color-scheme: light)');
  const f=function(e){let st=null;try{st=localStorage.getItem('tgcf-theme')}catch(_){}if(st!=='light'&&st!=='dark')setTheme(e.matches?'light':'dark',false)};
  if(mq.addEventListener)mq.addEventListener('change',f);
})();
fillSimMins();minCalc();simCalc();
/* PWA: copia local para uso sin conexión */
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}

;
/* ===== Eventos (antes en atributos HTML; ahora sin scripts en línea) ===== */
(function(){
  (function(){var el=document.getElementById('themeBtn');if(el)el.addEventListener('click',function(event){(function(){toggleTheme()}).call(el)})})();
  (function(){var el=document.getElementById('tab-min');if(el)el.addEventListener('click',function(event){(function(){show('min',this)}).call(el)})})();
  (function(){var el=document.getElementById('tab-sim');if(el)el.addEventListener('click',function(event){(function(){show('sim',this)}).call(el)})})();
  (function(){var el=document.getElementById('mage');if(el)el.addEventListener('input',function(event){(function(){minCalc()}).call(el)})})();
  (function(){var el=document.getElementById('mage');if(el)el.addEventListener('change',function(event){(function(){minCalc()}).call(el)})})();
  (function(){var el=document.getElementById('h0');if(el)el.addEventListener('click',function(event){(function(){setSex('msex','M',this,minCalc)}).call(el)})})();
  (function(){var el=document.getElementById('h1');if(el)el.addEventListener('click',function(event){(function(){setSex('msex','F',this,minCalc)}).call(el)})})();
  (function(){var el=document.getElementById('sage');if(el)el.addEventListener('input',function(event){(function(){simChange()}).call(el)})})();
  (function(){var el=document.getElementById('sage');if(el)el.addEventListener('change',function(event){(function(){simChange()}).call(el)})})();
  (function(){var el=document.getElementById('h2');if(el)el.addEventListener('click',function(event){(function(){setSex('ssex','M',this,simChange)}).call(el)})})();
  (function(){var el=document.getElementById('h3');if(el)el.addEventListener('click',function(event){(function(){setSex('ssex','F',this,simChange)}).call(el)})})();
  (function(){var el=document.getElementById('push');if(el)el.addEventListener('input',function(event){(function(){simCalc()}).call(el)})})();
  (function(){var el=document.getElementById('plank');if(el)el.addEventListener('input',function(event){(function(){cleanInput(this);simCalc()}).call(el)})})();
  (function(){var el=document.getElementById('agil');if(el)el.addEventListener('input',function(event){(function(){cleanInput(this);simCalc()}).call(el)})})();
  (function(){var el=document.getElementById('run');if(el)el.addEventListener('input',function(event){(function(){cleanInput(this);simCalc()}).call(el)})})();
})();

;/* Onda al pulsar y vibración corta en móvil */
(function(){
  var SEL='.tab,.segbtn,.stepbtn,.theme-btn';
  document.addEventListener('pointerdown',function(e){
    var b=e.target.closest&&e.target.closest(SEL);if(!b)return;
    try{if(navigator.vibrate&&e.pointerType==='touch')navigator.vibrate(8)}catch(_){}
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    var r=b.getBoundingClientRect(),s=document.createElement('span');s.className='rip';
    s.style.left=(e.clientX-r.left)+'px';s.style.top=(e.clientY-r.top)+'px';
    b.appendChild(s);setTimeout(function(){if(s.parentNode)s.parentNode.removeChild(s)},650);
  },true);
})();
