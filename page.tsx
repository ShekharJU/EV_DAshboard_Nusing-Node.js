import { Card, Title, Text } from "@tremor/react";
import EVStats from "./components/EVStats";
import EVDistributionChart from "./components/EVDistributionChart";
import EVModelChart from "./components/EVModelChart";
import EVLocationMap from "./components/EVLocationMap";
import YearlyTrends from "./components/YearlyTrends";

export default function Home() {
  return (
    <main className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Title className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </Title>
          <Text className="text-gray-600">
            Analysis of EV adoption and distribution in Washington State
          </Text>
        </div>

        <div className="space-y-8">
          {/* Stats Section */}
          <section>
            <EVStats />
          </section>

          {/* Trends Section */}
          <section>
            <div className="grid grid-cols-1 gap-6">
              <YearlyTrends />
            </div>
          </section>

          {/* Distribution Charts Section */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-white rounded-lg shadow">
                <Title className="text-lg font-medium text-gray-900 mb-4">
                  EV Distribution by Make
                </Title>
                <EVDistributionChart />
              </Card>

              <Card className="p-6 bg-white rounded-lg shadow">
                <Title className="text-lg font-medium text-gray-900 mb-4">
                  Popular EV Models
                </Title>
                <EVModelChart />
              </Card>
            </div>
          </section>

          {/* Geographic Distribution Section */}
          <section>
            <Card className="p-6 bg-white rounded-lg shadow">
              <Title className="text-lg font-medium text-gray-900 mb-4">
                Geographic Distribution
              </Title>
              <EVLocationMap />
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
