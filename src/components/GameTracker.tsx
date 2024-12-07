/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Trophy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function GameTracker() {
  const [gameData] = useState({
    classic: {
      name: 'WoW Classic',
      schedule: [
        { day: 'Thursday', time: '2-3 hours', tasks: ['Guided leveling'] },
        {
          day: 'Friday',
          time: '3-4 hours',
          tasks: ['Guided leveling (prime time)'],
        },
        { day: 'Saturday', time: '2-3 hours', tasks: ['Guided leveling'] },
      ],
      checkpoints: [
        { goal: 'Reach level 60', deadline: 'January 2025', completed: false },
        {
          goal: 'Join raiding guild',
          deadline: 'January 2025',
          completed: false,
        },
        {
          goal: 'Get pre-raid gear',
          deadline: 'February 2025',
          completed: false,
        },
        { goal: 'Start raiding', deadline: 'February 2025', completed: false },
      ],
    },
    retail: {
      name: 'WoW Retail',
      schedule: [
        {
          day: 'Monday',
          time: '1-2 hours',
          tasks: [
            'World boss kill',
            'Check/claim vault',
            'Weekly story progress',
            'Check weekly events',
          ],
        },
        {
          day: 'Tuesday',
          time: '2 hours',
          tasks: ['2-3 LFR wings', 'Campaign chapters'],
        },
        {
          day: 'Sunday',
          time: '2-3 hours',
          tasks: [
            'Remaining LFR wings',
            'Finish weekly story/campaign',
            'Prep for reset',
          ],
        },
      ],
      checkpoints: [
        { goal: 'Complete LFR wings', deadline: 'Weekly', completed: false },
        {
          goal: 'Finish campaign chapters',
          deadline: 'Weekly',
          completed: false,
        },
        { goal: 'World boss kill', deadline: 'Weekly', completed: false },
      ],
    },
    diablo: {
      name: 'Diablo 4',
      schedule: [
        {
          day: 'Wednesday',
          time: '2 hours',
          tasks: ['Season Journey objectives', 'Nightmare Dungeons'],
        },
        {
          day: 'Saturday',
          time: '2-3 hours',
          tasks: [
            'Complete seasonal challenges',
            'Helltide events',
            'Gear upgrades',
          ],
        },
      ],
      checkpoints: [
        {
          goal: 'Complete Season Journey chapter',
          deadline: 'Weekly',
          completed: false,
        },
        { goal: 'Upgrade gear', deadline: 'Ongoing', completed: false },
        {
          goal: 'Complete seasonal challenges',
          deadline: 'Season End',
          completed: false,
        },
      ],
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Game Schedule & Goals Tracker</h1>

      <Tabs defaultValue="classic">
        <TabsList className="grid grid-cols-3 mb-4 p-1 bg-slate-100 rounded-lg">
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            value="classic"
          >
            WoW Classic
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            value="retail"
          >
            WoW Retail
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            value="diablo"
          >
            Diablo 4
          </TabsTrigger>
        </TabsList>

        {Object.entries(gameData).map(([key, game]) => (
          <TabsContent key={key} value={key}>
            <div className="grid gap-4">
              {/* Schedule Card */}
              <Card className="transition-all hover:shadow-md hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Weekly Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {game.schedule.map((day, index) => (
                      <div key={index} className="border-b last:border-0 pb-3">
                        <div className="flex items-center gap-2 font-medium">
                          <Clock className="w-4 h-4" />
                          {day.day} ({day.time})
                        </div>
                        <ul className="mt-2 space-y-1 pl-6">
                          {day.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="list-disc text-sm">
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Checkpoints Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Goals & Checkpoints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {game.checkpoints.map((checkpoint, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 border-b last:border-0 pb-3 transition-all hover:bg-slate-50"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-500" />
                        <div>
                          <div className="font-medium">{checkpoint.goal}</div>
                          <div className="text-sm text-gray-500">
                            Target: {checkpoint.deadline}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default GameTracker;
