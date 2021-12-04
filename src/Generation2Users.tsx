import React from 'react';
import { resetStyles } from './App';
import { Loading } from './Rankings';
import { fabric } from 'fabric';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

dayjs.extend(relativeTime);

const StyledTableCell = withStyles((theme) => ({
    root: {
        color: 'white',
        fontSize: '20px',
        textTransform: 'none',
        fontFamily: 'Agenda-Bold, Arial, sans-serif',
    },
    head: {
        fontSize: '30px',
    },
    body: {
        fontSize: '26px',
    }
}))(TableCell);

const AddressTableCell = withStyles((theme) => ({
    root: {
        fontSize: '20px',
        fontFamily: 'monospace',
    }
}))(StyledTableCell)

async function fetchGen2Burns() {
    const url = 'https://letsalllovelain.com/gen2slugs/';

    try {
        const data = await fetch(url);
        return data.json();
    } catch (err) {
        console.log(`Failed to fetch burn data: ${(err as any).toString()}!`);
        return undefined;
    }
}

export function Generation2Users() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [layers, setLayers] = React.useState<any[]>([]);

    const [lastUpdated, setLastUpdated] = React.useState<null | string>(null);
    const [totalGen2, setTotalGen2] = React.useState<null | number>(null);
    const [owners, setOwners] = React.useState<any[]>([]);
    const [filter, setFilter] = React.useState<null | string>(null);

    async function loadData() {
        const burnData = await fetchGen2Burns();

        if (burnData) {
            const {
                lastUpdated,
                totalGen2,
                userBurns,
                devBurns,
                totalBurns,
                owners,
            } = burnData;

            setLastUpdated(lastUpdated);
            setTotalGen2(totalGen2);
            setOwners(owners);

            setIsLoading(false);
        }
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const address = e.target.value.trim();

        for (const owner of owners) {
            if (owner.addr === address) {
                setFilter(address);
                return;
            }
        }

        setFilter(null);
    }

    React.useEffect(() => {
        resetStyles();
        document.body.style.background = 'rgba(88, 44, 216, 1)';
        loadData();
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    return (
         <div style={{ marginTop: '130px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', maxWidth: '1400px' }}>
                <span style={{
                    fontSize: '30px',
                }}>
                    Generation 2 Slugs Claimed: {totalGen2} / 500
                </span>

                <span style={{
                    fontSize: '15px',
                    marginTop: '15px',
                }}>
                    Burns Last Updated: {dayjs().to(dayjs(lastUpdated))}
                </span>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '40px',
                    width: '100%',
                }}>
                    <span style={{
                        fontSize: '25px',
                    }}>
                        Search Address:
                    </span>
                    <input
                        style={{
                            marginLeft: '15px',
                            width: '680px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            fontSize: '25px',
                            color: 'white',
                            fontFamily: 'monospace',
                            paddingTop: '7px',
                            paddingBottom: '7px',
                            borderRadius: '3px',
                        }}
                        onChange={handleSearch}
                    >
                    </input>
                </div>

                <TableContainer component='div' style={{ marginTop: '70px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Address</StyledTableCell>
                                <StyledTableCell align="center">Slugs Burnt</StyledTableCell>
                                <StyledTableCell align="center">Gen 2 Slugs Earned</StyledTableCell>
                                <StyledTableCell align="center">Burn Bonus</StyledTableCell>
                                <StyledTableCell align="center">Total Rewarded</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {owners.filter((row) => {
                                if (filter) {
                                    return row.addr === filter;
                                }

                                return true;
                            })
                            .map((row) => (
                                <TableRow key={row.addr}>
                                    <AddressTableCell align="center">{row.addr}</AddressTableCell>
                                    <StyledTableCell align="center">{row.burnCount}</StyledTableCell>
                                    <StyledTableCell align="center">{row.gen2Count - row.bonus}</StyledTableCell>
                                    <StyledTableCell align="center">{row.bonus}</StyledTableCell>
                                    <StyledTableCell align="center">{row.gen2Count}</StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div style={{
                    fontSize: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '40px',
                    textTransform: 'none',
                    flexDirection: 'column',
                    color: 'rgb(230, 230, 230)',
                }}>
                    <span style={{
                        fontSize: '40px',
                        textDecoration: 'underline',
                    }}>
                        FAQ
                    </span>

                    <span style={{
                        marginTop: '30px',
                    }}>
                        Two slug burns equals one generation two slug.
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        Burning 5 slugs entitles you to one bonus generation 2 slug.
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        Burning 10 slugs entitles you to two bonus generation 2 slugs.
                    </span>

                    <span style={{
                        marginTop: '40px',
                    }}>
                        The devs are reserving 10% of the generation 2 supply (50 slugs)
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        Generation 2 is first come first serve!
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        Once the 500 slugs are claimed, further burns will be counted towards generation 3.
                    </span>

                    <span style={{
                        marginTop: '40px',
                    }}>
                        To burn a slug, just send the slug to our burn wallet: FNvSDm8Q1MnmqeuTb5wkLeX3Wbnriis8nJ9vWXuHViSg
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        Your address should show up on this page shortly after, confirming your burn.
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        We will burn all the slugs in the burn wallet shortly before generation 2 release!
                    </span>

                    <span style={{
                        marginTop: '40px',
                    }}>
                        If you want the slug scorcher (1 burn), slug pyro (5 burns), or slug incinerator (10 burns) role in discord,
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        just post your address or transaction in #slug-gang-submissions and we will get to you shortly.
                    </span>

                    <span style={{
                        marginTop: '40px',
                    }}>
                        The generation 2 release date is not set yet. The art is still being worked on.
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        When the time comes, we will likely airdrop you a custom token that provides you a single mint
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        per token from a candy machine, to be claimed at your leisure.
                    </span>
                </div>
            </div>
        </div>
    );
}
