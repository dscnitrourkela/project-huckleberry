'use client';

import React, { useState } from 'react';
import { Clock, Code, GitFork, Users, ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GitHubRepo } from '@/types/projects';

export const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  const [showAllContributors, setShowAllContributors] = useState(false);
  const initialContributorsCount = 6;

  const displayedContributors = showAllContributors
    ? repo.contributors
    : repo.contributors.slice(0, initialContributorsCount);

  return (
    <Card className="w-full bg-white hover:shadow-lg transition-all duration-300 border-gray-100 rounded-xl overflow-hidden">
      <CardHeader className="space-y-2 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-geist-mono text-gdg-dark">
            {repo.name}
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gdg-blue hover:bg-gdg-blue/10 rounded-full transition-colors"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-gdg-gray">
          {repo.description || 'No description available.'}
        </p>

        {/* Google Colors Bar - Mini version */}
        <div className="w-full h-0.5 rounded-full flex overflow-hidden mt-1">
          <div className="w-1/4 bg-gdg-blue"></div>
          <div className="w-1/4 bg-gdg-red"></div>
          <div className="w-1/4 bg-gdg-yellow"></div>
          <div className="w-1/4 bg-gdg-green"></div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-2 py-1 border-gdg-blue/30 bg-gdg-blue/5 text-gdg-blue hover:bg-gdg-blue/10 transition-colors"
              >
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs font-geist-mono">
                  {new Date(repo.created_at).toLocaleDateString()}
                </span>
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-2 py-1 border-gdg-green/30 bg-gdg-green/5 text-gdg-green hover:bg-gdg-green/10 transition-colors"
              >
                <Code className="h-3 w-3 mr-1" />
                <span className="text-xs font-geist-mono">
                  {new Date(repo.pushed_at).toLocaleDateString()}
                </span>
              </Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-2 py-1 border-gdg-yellow/30 bg-gdg-yellow/5 text-gdg-dark hover:bg-gdg-yellow/10 transition-colors"
              >
                <GitFork className="h-3 w-3 mr-1" />
                <span className="text-xs font-geist-mono">
                  {repo.forks} forks
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-2 text-gdg-dark font-geist-mono">
              <Users className="h-4 w-4 text-gdg-red" />
              Contributors
            </h3>
          </div>

          {repo.contributors.length > 0 ? (
            <ScrollArea className="h-full w-full rounded-md">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-1">
                {displayedContributors.map((contributor) => (
                  <TooltipProvider key={contributor.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <Avatar className="size-14 ring-2 ring-offset-1 ring-gdg-blue/20">
                            <AvatarImage
                              src={contributor.avatar_url}
                              alt={contributor.login}
                            />
                            <AvatarFallback className="bg-gdg-blue/10 text-gdg-blue">
                              {contributor.login.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          {/* <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate text-gdg-dark font-geist-mono">
                              {contributor.login}
                            </p>
                            <p className="text-xs text-gdg-gray">
                              {contributor.contributions} commits
                            </p>
                          </div> */}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-geist-mono">{contributor.login}</p>
                        <p className="text-xs text-white font-geist-sans">
                          {contributor.contributions} contributions
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <p className="text-sm text-gdg-gray">No contributors found.</p>
          )}
        </div>
      </CardContent>

      {repo.contributors.length > initialContributorsCount && (
        <CardFooter className="pt-0">
          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-full font-geist-mono hover:bg-gdg-blue/10 hover:text-gdg-blue hover:border-gdg-blue/30 transition-colors"
            onClick={() => setShowAllContributors(!showAllContributors)}
          >
            {showAllContributors
              ? 'Show Less'
              : `Show All (${repo.contributors.length})`}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
