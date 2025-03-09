# EV Population Dashboard

A modern, interactive dashboard for analyzing Electric Vehicle (EV) population data in Washington State. Built with Next.js, TypeScript, and Tremor.

## Features

- Total EV statistics and key metrics
- Distribution of EVs by manufacturer
- Popular EV models visualization
- Geographic distribution of EVs
- Interactive charts and graphs
- Responsive design for all devices

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Tremor (for charts and UI components)
- Papa Parse (for CSV parsing)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd ev-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Place your EV population data CSV file in the `public/data` directory as `ev_population.csv`

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.

## Project Structure

```
ev-dashboard/
├── app/
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── utils/          # Utility functions
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/
│   └── data/           # CSV data files
└── README.md
```

## Data Processing

The dashboard processes the EV population data to show:

- Total number of EVs
- Average electric range
- Most common manufacturers
- Popular EV models
- Geographic distribution

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
