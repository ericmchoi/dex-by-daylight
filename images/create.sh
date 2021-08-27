KILLERS=(
trapper
wraith
hillbilly
nurse
shape
hag
doctor
huntress
cannibal
nightmare
pig
clown
spirit
legion
plague
ghostFace
demogorgon
oni
deathslinger
executioner
blight
twins
trickster
)

SURVIVORS=(
dwightFairfield
megThomas
claudetteMorel
jakePark
neaKarlsson
laurieStrode
aceVisconti
williamOverbeck
fengMin
davidKing
quentinSmith
davidTapp
kateDenson
adamFrancis
jeffreyJohansen
janeRomero
ashWilliams
nancyWheeler
steveHarrington
yuiKimura
zarinaKassir
cherylMason
felixRichter
elodieRakoto
yun-jinLee
)

for KILLER in "${KILLERS[@]}"
do
    mkdir -p perks/killer/${KILLER}
    mkdir -p addons/killer/${KILLER}
done
for SURVIVOR in "${SURVIVORS[@]}"
do
    mkdir -p perks/survivor/${SURVIVOR}
done