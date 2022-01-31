import React from 'react';
import { resetStyles } from './App';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const rewards = [
    {
        "addr": "FrSSqd3AscPDSM37vSzF71Bnt2dDsyCFTR852p7dw3Ys",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "7yq62QbWCFLaM35QChbFPgTCcAteFTFP79trq2tv8oNm",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "6ad2siQxDhqMenybC8cWcnrbtpaeKtmokzsTAxBpQ3fJ",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "3BDMLRctAoVrUw1jDDrP4whBKqarEpVHBc5iDryjHQy6",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "FwPLJZV893czHNJiJNWhNdgnzw6TvuB4iMiQbSDswBFz",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "23NoQLoFyvYJds5jSFjNwSwk6ioy5Ks3WXJQtkzsYZL1",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "GzyTcuGWYF5kkwqKfeViigeX5hsGgA1qbWKbqra3x2yv",
        "count": 1,
        "source": "burntDogs"
    },
    {
        "addr": "6qasrabZgKbbtjkK4aH5adKTdcxoBxUfWLV2jeQuFUKE",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "2aZLcJt54k4C5Jo14XrdddGtErVQAWCt1ReyY62NrUhJ",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "AwUojp6by2AMvnxjub8FJjks3z8XW1qZupp8sSQ8vNqd",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "GMwhcCuFpPpLHn7Mq75DgsoeUmBHhWuDEW68hGuSoaZe",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "9v4zbPaRJS59uAjZcpepsyEAcvJxW3HNcqWJp9dGmbdu",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "BdsrCk3DRm66usFF37XnNqJWsCX8WPgwsZ6Nw9gxik7c",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "BrXW6bs7JXnmmY2PLVMCBghVchcCHzFcWXswG3sJrrHG",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "2EdjdqBpo6STsetkkcNuxynHr5av6szHJciZRU7yv8YD",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "Gzgbmfn87vbydRaSwiGoSaKJpeWcoEcKPMHofChopqcU",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "HEYa48kLXLVFt4BW7iKqDSTeqBLyzpBnpmVfBxCuszCF",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "a5WkDMCkajcdHDPFeCvtpdzoBWoexssB2tRSeci6EZo",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "92SR4roDC3KaLa83ejEgs5GGadJtjB8sFQgVM6PHaXii",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "4rvZb3LrdEabxSu6SYnnT98UqJac7aQfCaX9ekRkxoqr",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "HEFHDjHsAKCRWzZyRMJtwTzSgjycoCud8xEaebHesUdT",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "Aid9pKzuUXLxzrqRPfS3HP3GquZMsH7MaFNhiVY5k3yo",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "5PbBKeqDeYHdEfc6pWZNg4A8ctfVSC4UoVysrxyKWnZg",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "3i6ZPLTdiPzoFoDDB5EFgvYeriRdY2eNeqww3H8ude9U",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "2h9wBcbecPDNkjMMFw4vqcR5Vy5ckv81TyXivVVJnPYD",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "ET5ZMgpvAojs47caKgUY33k3KfSvV4VrgHmB1ZsTjond",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "7QpDNraMfZfByMCp6sLufXuJCmM7ksQCt8RsY83gt3qx",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "BdXCpLtvv9pneVMubgn3v6fDhVuV6MedgeJKyb3EMMFm",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "6HLSApuzE5e6E3Yiy49V3kM17HeZoGBBmUvsy14ANyje",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "Bv3sd5i9evicVbosCmEjUD1oAWSrcj49jmQ1cAJVQPC8",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "PYwfweAeHCriEkhrgWZLec8nwAwMNH9kmRKmU4V9uGP",
        "count": 1,
        "source": "sentDogs"
    },
    {
        "addr": "3YmcyUsdHW9AZnb723y4oRQcN1q7igHcRnUghRqW2FfP",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "JKbz62smnwFRGojsmahNYbBiz9EFf14zEwezgQKyLgX",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BcYJ55o2DSCu8KjXEYLJfuPDMEnqYivtqcMZuFjuunfJ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CwLWXPPJ6Y4E9cswBQb79SpRdwSN1T9ZmX5h91gQWp3y",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GA9kozeFBYMuWxpZvrZ8JtrmcoQ9cqM9KDLpZGrrCzQt",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9VSCY2yBfRuSqPwj7NFgFFjgpoMbESievqaV9R33EmWr",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "2jzTwXuEGSp4ndazLDnqmtWqyrrkQqN8wbS4dbf2zPC6",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Gf3gudnKGoPNXmYPmJqNxEZpcXbNYLCGyP3kjVzaf1ug",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "95c7XiCS25q5GdRaycKd28PVYq8t1cACcqavyJkATqd3",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CLcPAKv2NAcqq8mBXBYQB4w5x4ydDcm5aEmYCusKjseq",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FtWCMHNujo9MT8pBKWFGCH8RTxCQXb89CN6Eti2gSmTb",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8JMYLg2yEuWr14sSbSA31Xdfd3n4zHFN8npyY8vVmGa",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "2csXwqK3Q4yVEExdQ6eCNRZeTJgw8ufZTqV8B2scXjtY",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BtqL8v5LHsy74AvXrmG5yo2EZugripgvHYWqWyyBrvL7",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "ALTBXW4ybFArq8X3D2EMjjBMcme46f6Jj8nhMGX9FXJ5",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CGPvUgkhyz6hizwWDQcaK1m8bLAVyrCLRXK76UXW1J7N",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Au8ixd5KtupumUigtBduTadzWHG6K8PcXG1zYQv6H35p",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "q2XrkY5QY6zwK5Lx8XUAAytgRDAktbLB4jMspXqXnws",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "D3hBzGYJe7LAj3xawgtWCQ55fCgGL1uKFW2JHxDWuHQx",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Cm6fu23h1UhLQHwmfFhiZc7HXP5WmtdtuNbDWpKzJwNY",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FvwSFZA1powfGY6qfbV1EGP3iBG6K6njECp2nqQfEvck",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "D3DYoqJ2ZUDuW4F86En6oLx9F1HpW7Gkt7ccUVTRHjXs",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "H5db2YnMJSETU71ZBKseYaCoaq66JURb2BMmsRg3Jkfu",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "5kcDYc3fVo8nZobNWeuNog9hq3AgKW6AQqdkofy7AFxA",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8VvCupkgXkNSXWg5iodPrq3GiaDwyddpb5Cc8a2FzaoZ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "5Rr5iFNZ4LRqkCyVb2nGHwkhc2C4R5aTC3wRMVGMdW7V",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "H5kzEpBwyXgHbmMBxc2GJzAZG1RMsLEcKAWypvDymNqZ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BVGzAdeiRoAvR4pKoaWhLFip3D21eWAu2mapNZNiYtrZ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DahEFxa37Kgxu1GzjUBbzAjo9L4z28Exkt6nTer7HnSF",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "E2MQyMqaRU19Qh7RdKiU3DV9FjTNN7tquGhfdgB32HQc",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "ECtqxEeiZk1K7RGFai21acmWxBACMj5AANXTLuwVPK6Z",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CwQ9gZrMmt8VE1NyJCsznvfwyqzoGvZKbu21q4Yt5L74",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9u4kXZZQXraaqwJXKE7h2LebCX75UtHYXMgVvQ1s5VMK",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "72E92SGMewHpGZsj4bsa2c9D9X32ihhf29NFTbWcjEg",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "EhRnQVeyfYtWx9XRDYkYcPV2DSDTUadMAHJdDmZ8T2d7",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6i2b8ps66e89nvkgrM86euY75aVX3Cw7Dn8vTKkHv5Wn",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GDsKidJfZo4P4NyKXEpRZyyUJiwfGR8VitFaqJjd9C9S",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CowUYktZgH6ZLKio5Kq7GcKsoKYDfHYxC3tybqnNtGDC",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FJGfNqURD691F5PJtb5fL3j3rJ8sjBEXx8r3n3yJuAnL",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DKiXcrDNQMWrV1P23PyWtUtGNge8UAP6QeEdf5WF3j18",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "AVK7u6hGJog1YchsKxJNUWcXGSxxijHnYaj2J3vdM55f",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "25wRNVzFxNwGwFqYChioJLY41E6uyvc4ibfB2AbUasky",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "4aF22dkkRReTTKwHguXoLUBudjW8Aa7zrBUY98WcQf6C",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "4UGqcvfaNBcH9n588uAWqEszFDkVZj5QC9R3yppPycq9",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BvhHTRiKZk6ikavRfPKPbPGV1ewSBDKSiaAb2WwdE2LR",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "cq3oYVEW6Ueitrox8fVt5D1n4iuz17aWrvyFSeugUBx",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "7aMAM2sw2JVj5tDws1rfLJRC9Ky4XVzPCADHuYibEk4v",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "C5SFmGD7zQxnDsHLdoEYL1LRyUeoXox7LPB3X6HRhFyG",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Fq2x8GhTDVTVg4pDAgC6QphdgZGFHvaoxoZc79rgYZgc",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "B6fgRR8HqLaUswzaiZiSXiAWhH65tr7jzpc7ufWBu23p",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "AJpuaH2Ke13VoMrk8MRCE693yMWMLyTBf2e2J48Pzz7j",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9d8j8qE55WL7bepfAAsW5LQjGy6emz5QLEUjUu42UpYB",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "iaQsA52MXjWL6v9tjqeWuKPEL3y3ihn2F1GTh9TbC3c",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "4NzKmH4zQS2bGHRfqZVGWEKpdAAEvkZNPVjY8wGNmAdV",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HqekrnfxxQLUxnhWCrY3rt5V7wQrwa9G7dvxpWfz7bgb",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DeA6MCoz3pVfeN5oya8QEr6HZSGkpMdMzQ7t7xa7czj7",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8Tfo3dzPG1CCmh6NwzBzNWhbehti7NhMy7cCAYfaM5Xp",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Dn576c334HSWawchtFCHZVdV1kpZXf5DfPxzK3yhh2og",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GU9sqLAjaaPmzKF1UdNzGjUWCBjTJ2VcvpDUbm7wK1WL",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Dd34CeD99ZWhXgBMdbva9ZSJLgiZoMgwazUCaAFQsCsQ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6ad2siQxDhqMenybC8cWcnrbtpaeKtmokzsTAxBpQ3fJ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "5pCMYRW58KfWr9tj9kXr53oT6gQFRHbc9EWuDNnGTxPP",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DcopCMAeXeyMZJNxmXrC7rhtzHwqQz1VC8Q75gutKcRx",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "EoRfMuaiDgQ84t7LG8Y9DGqmyi4qMvizg7GYKGGkZKu8",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "2QdLAzfbczrmLJ8RqCZ2GBkEtxMt6xx2KZoVJeMMTnwM",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HhiXkSbu9jj9tfjWpA5z2qhwKj24NBCmbSJpZscXAkL8",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "AJBdD8vRBiCajpm9TgBSddqLzy4Lbq8ZTnnkbPgBXSmr",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "XtacXGkTabZ1RMWCjgmYV1DkmJXyVUVqqqDWkT3oYNk",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BPJAcrhH3FRkLKCNdi4nWe3DuTeTfLsLAYNhNw63eUDN",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "n1jFHiJPe3TCcKCzCt7Zgn34uAjNsUbhubuu4jP17od",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "2apALiPjLhsqiJm3eopoWtKZbWMvuSorucDxXjobFnSh",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HjwRjhpCR8LSzfFV2gcjX75Hmczm5gFTYkWHwY9sd2uF",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "46Q7eQBikDSyNH2tBLYB91wtM7nwQ35PMxsbF7VgwybH",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8gQqSEEbgfHGnkkX5DJf3T44UK1cDpPMckRyChH33bvG",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "EicX8odnCqR7XGPBVuJ7tr2vvv91JiukHon8H7PbSJmy",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "F1qSKeQiFuL5dPkVW8zxU8RUpvg9fFweKHVwSQY8iftQ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "E9ovEYsChrup6YW72zu8jhVZjUAjbjDfhXbZEmFAYxD7",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "KTbnQ5SL6p796xr29bfATpHyk3uzfdPATK6taPmr439",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DYNXvehz4a2wkXkAqnfZYiofqcQfWk8up14ojmnMn5Y6",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DbfE6ZfdKvdpKSXYTFfH5ADwfGCmfN9Q6EzWLTueELqP",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DWwKQNzoQay1MXtMQWgYomYHrpgbu7LaumAZtRXQe2Xm",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "AJbmuBKfDBwEuvMHdyKxp1YFhc6n79AXYG98W8CbEwmE",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9Acmpzv9hKh4g9KHsHHiVV19LsMHok5tNqXMqB2wKky4",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "ET5ZMgpvAojs47caKgUY33k3KfSvV4VrgHmB1ZsTjond",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8Vr5wh2GkrFPqh9m1gUnCtoetuBmLeDqzTMGffQbXStt",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6E3XqSfA826coU8vuaDLpcbxcFKy7UnRcXyTAGoPnPZD",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Eh68g55EV2fAnavdx9UDrcssLXwd59fczdAofc3dn1u8",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FQ7ou7cY1j2f1eoCsk4Zfo1bKk8hRJ49BtYDmEwCVXpo",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "E4LuBCatMu35aeJBAPipLYiDDyTgTL4WbHqQCSRp3Few",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "ryBtbrZ9DxPYQdyQGxM6GsQpgCgsYdMZrCxruEiYfNU",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FzQYfytjijjig1Pgi2RSjJNiBPWj7GVZiMaQHdcYPAuC",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "3F1wPD5QNDUVaiKDV8N84M5NsjuZaNXjLb2PSV5c11ga",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "4XDFSYKuBu7rsopm3MM9hPhWRTESoYin1bxr4HnqbBN4",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6uDZnUbVRJXVbPQ323AeQSt4mBqYWrRD7SmnAhMdZd2o",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HH5oT2AvhS2iyd4J1jGoaWiCbC5zzbpmehCsKSXdcjnB",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "7EuRk48UADVTe4WtVBV8zC8NbaFaWAUFXoYP73Yn85A5",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "89Zf2PK1ZaThRGYpU618JdEkMcbn3G5dfcWVVpeHU9JJ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GqmRFGCVF924X7HMn93isnXyPGK1hZiLo9mdcV2LtT63",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "2iWw9w8qQbn8CK5kEXXkPx3XFL66YcJTTYcTjRh24svJ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "23GsTEe2xdd3otjkNfY6wwZXVbPsGAegYTTFn9chiBNs",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "3yduPVoK6w2YiASXt5U8YooM5Ty7zQhUiq6mLXbwMVQN",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "7DkAKQVWUumZ3mQscFZa6JCsYjXoreh3TSetXcv8fasn",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HkENCg5va6TmnpXK8fcf5ts1r9T7EXFrj4LuHzJVPxTd",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "fViCBG1oq5dUHTiamrr7BzDyGydqiAHetE8SvCungHD",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Er28yp3dby4aJnVjvjya8Fr83aLFHYi4sAVLJPYX1bAR",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "H8vVjiV2otQSqfc4eYiDELsuqvKgFcWhLLxgGEe3YssH",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "CUCT9Z6y4ZyRbSr3KnpTpNqdSz4YKGQ3Z1i3o61KqSxG",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "EUdj5zitUyjYfuHSs7mEsGxodzKdrURvjJkRv6kP7LMn",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "7PZBB8Nbskv29FrfUSa6dTuhmEBrrqTadnkR9c6gThmt",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9EEmWmTmSZgSxMi7KoZ7WXhnTtiE9mpqHTaSfVSxmbt4",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GGGW7rhkfi7bUzUsgGtMadkwE8PXnLMvm1HWYJpqzkDX",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "5PZw5KrtEcqA9WaWr58BCb94pWFWa4fjpEn9chMZ99oP",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "3aFmscEYcFTRxBXtLBsKEXyBnCeMgQNFmMqpYt7voFRt",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "HimfSfCTCeR726mZCCRBtqBFEeDMEmAPHwg2ijM9Roq",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FgWATd5NsGphBSKq7ZG1nhLguNYuYtNzNz7YpZRiTVEG",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "E749skgnAkwNDiPU85pUnwpsiYfiziH3TQwiQRU2dT6V",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "7YrSyWUQkXrgj2srfPXVXqTRrRitrjrCsGiokcZgK8UZ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8CDgPP6eVxpeYykAWM58HDfmY325HRkAzLVfBgtGjobD",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FMm416bas6SwSGkL9dch4pmNtGBAvUWRh5hJcEo5wNPq",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Fa89ffDFwRW6c7QwYiJTxk8DWbzrDMjgG2LQhN1vFskM",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6ouJFWwXyaKoyc1i2Zj13GdwdK8ShM6PAZRyEgW53fRs",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Bcps6TTHVg2cMg4KxbsKs2o1ceXFgd1iayGxGAryPkdJ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "EqRSDWeVLPa2SJQndsYoKYBJ933SL9iKhW6g4DeE46sR",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "F9uKJy6P5vT7dkmdWzZBRio1n17622Y1QPANVheuLyBr",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "4wSjXCojPZfFC3JgFN7PoMVHCYoyWRTqJZSb94vDKYXi",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "A6NiPSykYuQXhH7JWh69Agmc5BjAbELvpcqdos5rpE45",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "DWSaxHezxuYZNPqY3GvTGoHZqo8RmQZTjFSsB3Gvs6Xf",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "6fMHZfhLLaakwutQUGnwfbDWmNKe5kwEFiaUxQ5FcsoL",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "3a6iYb465cGk1b9tPPvNhsFniSoH8nYKwc9a2q5guSbE",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "qHrKoSK7g6E1V2wNScLtDm2ctv2E2j6SkPj5TU4SEct",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BKNUcz2NbNhy5Z1sdk9if8LNKVnDPrwrNNyEub4fPVgx",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "BnZNCQz3Zqb1o4nrjW3zNGbWdKubSTw7mAU5NGYouJMF",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9UgtPr41VznEyTv789etMdDcmN3eN32maZzYdt6KAq37",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "23NoQLoFyvYJds5jSFjNwSwk6ioy5Ks3WXJQtkzsYZL1",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "9rEZLZktQ1ksYjtSN5zULjiRAdV2ez1npTJdTgScSfu7",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "J1yfB8VhGs2fQuMBAK9M9ptzxrYbkSp5MNUhQE6LnFF9",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Z7HVLdRnv4kxrrvEUDxwKUshpvN1ByAMFpsTik3rdjg",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "AFYFcS4shBtZpuAYi9KR893vZMawAWer1piwoVfKhz5h",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "FeixCK6UepQXVWAbDDkDZaXj1hDsQk8gAjhhQpDTb4Tr",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "GjXH4NCCLDyo85XQVssvdAgzKzVrxkz71xaTqsd56JV3",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "5WFrAqHuHS482DGMkPeBJctMiCA4wrvqv2CsaMgxZt6g",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Evffb2rmP4hB5j6mC2rQsBepitr9fXQjM5yWBQd4KvvZ",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "3xYe2QhqCfTd7mhFYMY6vAgfRncVZdyHkxTMEgiQ9oCg",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "Joepy3H6hQsjZiMPXKpT2Y35C5HVp7Ba9U1SfcNcn3S",
        "count": 1,
        "source": "slugGang"
    },
    {
        "addr": "8JMYLg2yEuWr14sSbSA31Xdfd3n4zHFN8npyY8vVmGa",
        "count": 2,
        "source": "burntDogs"
    },
    {
        "addr": "AJBdD8vRBiCajpm9TgBSddqLzy4Lbq8ZTnnkbPgBXSmr",
        "count": 2,
        "source": "burntDogs"
    },
    {
        "addr": "2uS1Pp6UUYbpahCbAjqFPjB34DD6UmjAgXt7FRUiSojK",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "5xfsfFvR7R8cTFLnRzzmbQEtyB8VNqWwoGjS3DrEYGEf",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "ASTVfrg8hVub8GgxFZW1Jc6oB7js6cCkttV8BKBCXAkj",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "3ZSgDFMm7wi4Hdc8QrBxskKLabGShx1MKEpTsKTNWCPD",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "4BakpyzimvK5VfK1xVHDyrvsjdsrjYcPfuWUrC7vfmcf",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "7yq62QbWCFLaM35QChbFPgTCcAteFTFP79trq2tv8oNm",
        "count": 2,
        "source": "sentDogs"
    },
    {
        "addr": "FAHQTpzMosfmRohh7Lx8Xdhn4vRNFjtiuBBP4mdrJs7L",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "H1GXfMA3Aui6M6Kc7zwwyHmaXZs9Z6ziZVLEwYj6eEJb",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "CRKc7yCJvZf7BScWRa3qGLGbKEn96eCYhzP8ZvNgYwuj",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "AtuNc9HBnJ8iYKsXZApoEG9PW8D2MUJoBNBizSkzsuuk",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "5o4x9HNsXUdaigZTi8RPkgoEj755S79FPDdvkDnq8gg6",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "rmt6wBonuNaaebRPpdzLSmLzrrSYGeuRUsAPSkaoydz",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "GwBCMXrEeVmnZuKCKQBDFRGhCbCKWhcFGbxWkJTs7CHn",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "7UpAjJXro6vvK468Ch7gf4BXUwYA11DVuj9Q3H5x5kvz",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "CRjQ8f3EYciGnrzUBdZw9NFuJy9BWiVYYpnTY5fujkPD",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "A9GKERVXdkmbQdRpWxu57tudcspr4rmXJ7iGqabcAkvE",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "Av9h6g5oUKeUfaRcgVUPrunuFu8BdM3UhSnfF8crt3p",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "9kiNRgDzfbRAcid4w6nbcH7eZtyUuWFr9t6LGKDaDbS6",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "6d67QgGWJJF9c1kQHo47fBg8DhYhwdmF9Fv62cK4F818",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "78mqGwMbuSatp55o315hF74AfiiJAiYaZoJATKU4Jfmd",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "DXNLbvn8KDfttKV6B43BWmwQDwc617fqrL5WSVribiUW",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "6WXEBcmLBxudjp67G939JbQLUv9yeGBcNccfqHvz1khE",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "EKew68bXUzb97yZbdcUnfKoB1b5yscFY6kKiDfLVmhi5",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "3BDMLRctAoVrUw1jDDrP4whBKqarEpVHBc5iDryjHQy6",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "HDuzJtEUvqerAtWLQh11UyoArQjhDCr6g7w6AD9NoiDb",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "F8tyAa5Cgnz4dLVfYDSHx2ErwB2tFotWyyVKEcZk3aSg",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "F53oK6vy6VvzDdZH2JRVUDSqvrw9Z8jL3r9Q29tPVjWA",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "EVMGLYWeLJVewd97fnTd6fM1Gj9fCDJyCAGyWqg2mfSh",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "7MJkJZhF9Vp2iK3ndqiPvg9K3C4tD1prwpg2j26G6fXT",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "FhsZfLwsCKPn3qtEyKcActagQKwDCEhciMiFse9qiMzg",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "BbshgphJfX5QdcTUUUidMCgdfxkLYNJeSLDj1uN2e9y6",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "Ae3xp1szBVhtVJEKWpjXADYBYt97qGGWJ9zSk6vrxAWF",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "5bsjXL887DV7vB55dJPS1PQutroTV6EWoXpkiZoHisCs",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "8brsTCdymXBms6mxNZTbs5isaFgdP6PBr493HHom4cD2",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "5Yo8cBkSqLa2V67cRoQoFC9FCLvqNZMyaGttyopon4e9",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "2rNXXW55vzCnUobVkHbeTTP9vLfadtaeAed1onNnAGZa",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "8d1vFe9KhM5giy3oBiWq9vD8WEK9ZKZtBrfTKPURCnfk",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "hckFVnkcYCpkbzxunzthUKRQWDoU3n5d3ZHvMefwv8r",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "5qFYXDbArwX1ASYSixE4ftGP139D15ogdZrkfa1dAQy3",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "yTHtPA3yF4HEBgYSYyJA8HjwRk6FPKCRtycX18U9fDg",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "7RRh7VwuWzcr8yWQkCHfBDKdX92QmQyXW9YesJE8eqAm",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "52f64HcxsKhmhv53v9jBq3XHEV9seQDLt4HiNa6Y95Zj",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "A83FiatkLrnRM4QMAVVSeHBY5oRwkh3tpzVCQ8hctu8c",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "HqWs99ieormvA4QoxRw2wMJFhRoZSZ3tMBKH2GnHssZ8",
        "count": 2,
        "source": "slugGang"
    },
    {
        "addr": "6xsHVNZBcTCY2h4GBykpoWwY3wnTbwajYJTLQy8K4Ngg",
        "count": 3,
        "source": "sentDogs"
    },
    {
        "addr": "78mqGwMbuSatp55o315hF74AfiiJAiYaZoJATKU4Jfmd",
        "count": 3,
        "source": "sentDogs"
    },
    {
        "addr": "H8vVjiV2otQSqfc4eYiDELsuqvKgFcWhLLxgGEe3YssH",
        "count": 3,
        "source": "sentDogs"
    },
    {
        "addr": "3hxCdMY5wobd8e53SrAqfwXCtVGDSB556AVf6N3VWcRe",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "5oTzHi2aRKfATfhBp6ACZ3FFNrcGytzae2XWnhPp7ird",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "9jdkZoEkLCucA22RrJmvewfhv3Ma77ms5gV5Wu42ArbZ",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "2PiR3QxXifWib3wZZyR6G72nGg6wdv1jHsbVHLnUYJSC",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "EwzkWJ92ZDvSim1nX43Dt4KC4mpCwHKnKpfkp7zboeC6",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "Fuxxvckvjn7ecywQd9B1cJ5Nf22aPqpwEFetsW3AC9kd",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "2qSTGmLs42WEzw7HKhgPtvFryUM8qM3zcySR7bZvkyYs",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "6x59oY8R6NSqZHiPbRsiYKsoyw1JM5BMDE2zCRyvLTvR",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "A4qEHoTELLYhh9G5eR4uXafcATsYu1vQmGsHTmoHhhj3",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "BbcBkMRsnKxEFScsehKkkAYjvLsgTK6gJQFvBSASaTsV",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "GNW1ABYFdruBmELZ42QSaf1bT6PRwED9gxVH4hPNpqiW",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "4G3XiDLrn9PuEYepXJnoNPX7LUSWkabUToaBFVSvPQVC",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "7JfU9J3sBYqWFyHaF4Pa3fukYZsmhM9Xw9FHk5ukRRw7",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "EnJPV2Jm5MiEMzJd3jG4DJKMvGtEW2ydTvJzu86ewXuY",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "2gomF9sS2cXLQL3pS9aLXQovxdMzufQStNHGHbpuCDoT",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "oXAKScvAk8iLNo5KtfedCLUSRVh62X4YPiKR4gytKR8",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "2mKATvwybzesQ1bNCzxFgRhP78YWFmMJF84LJGfiFaRY",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "9AaxdpNSu3zmVmA9BEgZT9n7iUDwtCaLBmFtrw87XZ7b",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "6v349NtxEuswVnAp6YWSoZJ7m5wTsapoViLzUx2Rzs5F",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "6TxtboReQh5YHedxViyrX437jWvtu6WzL9sh9ojnBStY",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "5T1wU2KL8j4RinAuw3aCiHgDr7vun24dkQAr6TLe68c6",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "HMZ9LwUvs5vue6WbtZHdnvcz4RtMeHWz8LzWSa4NMGoy",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "GM9Ghxo8Kk9xVhdx4semibbSdQQNsdufQL25P4saLuDW",
        "count": 3,
        "source": "slugGang"
    },
    {
        "addr": "8MhqVio44XnCi7mf5o9SQQJDxQCQAWGikKVHmSWcck5x",
        "count": 4,
        "source": "sentDogs"
    },
    {
        "addr": "585XK7eRJZgLpyvubTXPR87Na3hWHohyWZwWp6FLfRrB",
        "count": 4,
        "source": "sentDogs"
    },
    {
        "addr": "AJBdD8vRBiCajpm9TgBSddqLzy4Lbq8ZTnnkbPgBXSmr",
        "count": 4,
        "source": "sentDogs"
    },
    {
        "addr": "4YY368yMMtYBwF74Ls8BK1RcPfEvShJJ14JhWqxFuUgb",
        "count": 4,
        "source": "slugGang"
    },
    {
        "addr": "3k8U3srq7XLwH5npRikcN4m8Z98xJAS4jiWTCPpAS49t",
        "count": 4,
        "source": "slugGang"
    },
    {
        "addr": "63xzgX1Sz8EJzdZue8feA9sFqrem4pgDUMkPpTVcQ4ge",
        "count": 4,
        "source": "slugGang"
    },
    {
        "addr": "DwkSxpzZMo11Z2xLdAWZQuWJY6sn4xmta5mfv41X48CF",
        "count": 4,
        "source": "slugGang"
    },
    {
        "addr": "HpMdtuuhv1rGEkvf77peuvk8Mwozd4nM3CCf9QhN33X",
        "count": 4,
        "source": "slugGang"
    },
    {
        "addr": "AA7SwbFEfQyt6CK663Rj1g7WDZJWpQEg8QQEUZKKbcCC",
        "count": 5,
        "source": "burntDogs"
    },
    {
        "addr": "FHZBmCU29CwFjiACBzkkGYL5FBApc5G1h6sQYDXrFMvb",
        "count": 5,
        "source": "burntDogs"
    },
    {
        "addr": "88wtKce5kTf2efYRLbb1zXjhdjmdS9RLWt2bmT9Qum6R",
        "count": 5,
        "source": "sentDogs"
    },
    {
        "addr": "6qKj5CbSoC8KCQixer2hzRJErhUe2dUrnnrCTYQ2duka",
        "count": 5,
        "source": "sentDogs"
    },
    {
        "addr": "HeohjHu8jiJ4gpEYnGakdfv4CxaFcCAS6iEfjLM9p1Ha",
        "count": 6,
        "source": "burntDogs"
    },
    {
        "addr": "CL4Y7XGeox8oAXisWQzjC8o2hHFjaaNNcpEMBfKiQdUw",
        "count": 6,
        "source": "burntDogs"
    },
    {
        "addr": "5LDdaHcE1tzcwtfBzor6xbYB9k57hwz8z7Edq7NBVhRj",
        "count": 6,
        "source": "sentDogs"
    },
    {
        "addr": "9QBVVGfqetHjHAJwjBpnBBvjGQHzGgttf9uyYKEJFpb6",
        "count": 6,
        "source": "sentDogs"
    },
    {
        "addr": "8JMYLg2yEuWr14sSbSA31Xdfd3n4zHFN8npyY8vVmGa",
        "count": 7,
        "source": "sentDogs"
    },
    {
        "addr": "EGiJCaMqQazuWAM9Xd9BiHMJvgsNmWRd8QzFFhT4pmUF",
        "count": 8,
        "source": "sentDogs"
    },
    {
        "addr": "HeohjHu8jiJ4gpEYnGakdfv4CxaFcCAS6iEfjLM9p1Ha",
        "count": 9,
        "source": "sentDogs"
    },
    {
        "addr": "2towRNrHkueT5VQbJLkj8YbYaxst31GJpw8WtWvPeiX1",
        "count": 9,
        "source": "sentDogs"
    },
    {
        "addr": "383G6Fw8kN11CFFq142pVLASiUhFW4M84zCoTY5HZew7",
        "count": 10,
        "source": "sentDogs"
    },
    {
        "addr": "A11ZfsWQyYhLSueQnb2CcT6qbNgxeX1JDcGZBUvoQ9ck",
        "count": 11,
        "source": "sentDogs"
    },
    {
        "addr": "EnRBKUqr42db6g4qjAYKT2tJoyCS4T7GAcfrVS3YzLqZ",
        "count": 13,
        "source": "sentDogs"
    },
    {
        "addr": "AAk4C19beaAjaNGQFPDZB2K3xwZ1gaUSuB4f8rFh6Cx6",
        "count": 93,
        "source": "sentDogs"
    }
];

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

function mapSource(source: string) {
    switch (source) {
        case 'burntDogs': {
            return 'Burnt Dogs on the Block';
        }
        case 'sentDogs': {
            return 'Sent Dogs on the Block to Burner';
        }
        case 'slugGang': {
            return 'Burned Sol Slugs';
        }
    }
}

export function ThreeDeeSlugs() {
    const [filter, setFilter] = React.useState<null | string>(null);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const address = e.target.value.trim();

        for (const owner of rewards) {
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
    }, []);

    return (
         <div style={{ marginTop: '130px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', maxWidth: '1400px' }}>
                <span style={{
                    fontSize: '30px',
                }}>
                    3D Slugs Supply: 599
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
                                <StyledTableCell align="center">3D Slugs Rewarded</StyledTableCell>
                                <StyledTableCell align="center">Source</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rewards.filter((row) => {
                                if (filter) {
                                    return row.addr === filter;
                                }

                                return true;
                            })
                            .map((row) => (
                                <TableRow key={row.addr}>
                                    <AddressTableCell align="center">{row.addr}</AddressTableCell>
                                    <StyledTableCell align="center">{row.count}</StyledTableCell>
                                    <StyledTableCell align="center">{mapSource(row.source)}</StyledTableCell>
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
                        3D Slugs were given to anyone in one of these three categories:
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        * Burnt a rugged Dogs on the Block in our giveaway
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        * Sent a rugged Dogs on the Block to our burner wallet
                    </span>
                    <span style={{
                        marginTop: '5px',
                    }}>
                        * Is in slug gang (burnt 1, 5, 10, 25 slugs)
                    </span>
                    
                    <span style={{
                        marginTop: '40px',
                    }}>

                        To mint your slug, go <a
                            style={{
                                fontSize: '22px',
                                color: 'white',
                                fontWeight: 'initial',
                                fontFamily: 'var(--title-family)',
                                textDecoration: 'underline',
                            }}
                            href='https://solslugs.github.io/3d-slug-mint/'
                        >
                            here!
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
