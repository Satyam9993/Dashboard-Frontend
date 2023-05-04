import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    usertoken: null,
    data: [],
    end_year: ['', '2027', '2018', '2025', '2040', '2200', '2019', '2020', '2022', '2017', '2024',
        '2021', '2026', '2030', '2046', '2126', '2050', '2041', '2035', '2016', '2055', '2028',
        '2036', '2060', '2034', '2051'],
    sector: ['Energy', 'Environment', '', 'Government', 'Aerospace & defence',
    'Manufacturing', 'Retail', 'Financial services',
    'Support services', 'Information Technology', 'Healthcare',
    'Food & agriculture', 'Automotive', 'Tourism & hospitality',
    'Construction', 'Security', 'Transport', 'Water',
    'Media & entertainment'],
    region: ['Northern America', 'Central America', 'World', '',
    'Western Africa', 'Western Asia', 'Eastern Europe',
    'Central Africa', 'Northern Africa', 'Southern Africa',
    'Southern Asia', 'Central Asia', 'Eastern Asia', 'South America',
    'South-Eastern Asia', 'Eastern Africa', 'Europe', 'Western Europe',
    'Northern Europe', 'Southern Europe', 'Oceania', 'Africa', 'Asia',
    'world'],
    pestle : ['Industries', 'Environmental', 'Economic', 'Political',
    'Technological', '', 'Organization', 'Healthcare', 'Social',
    'Lifestyles'],
    country : "",
    topic : "",
    source : "",
    title : "",
};

export const authSlice = createSlice({
    name: "index",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.usertoken = action.payload.usertoken;
        },
        setLogout: (state) => {
            state.user = null;
            state.usertoken = null;
        },
        setData: (state, action) => {
            state.data = action.payload.data;
        },
        setEnd_Year: (state, action) => {
            state.end_year = action.payload.end_year;
        },
        setSector: (state, action) => {
            state.sector = action.payload.sector;
        },
        setRegion: (state, action) => {
            state.region = action.payload.region;
        },
        setPestle: (state, action) => {
            state.pestle = action.payload.pestle;
        },
        setCountry: (state, action) => {
            state.country = action.payload.country;
        },
        setTopic: (state, action) => {
            state.topic = action.payload.topic;
        },
        setSource: (state, action) => {
            state.source = action.payload.source;
        },
        setTitle: (state, action) => {
            state.title = action.payload.title;
        },
    },
});

export const { setLogin, setLogout, setData, setEnd_Year, setSector, setRegion, setPestle, setSource,setTitle, setCountry, setTopic } =
    authSlice.actions;
export default authSlice.reducer;